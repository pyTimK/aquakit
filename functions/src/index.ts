import { Data, FishData } from "./../../classes/Fish";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { setGlobalOptions } from "firebase-functions/v2";
import { onSchedule } from "firebase-functions/v2/scheduler";

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import * as admin from "firebase-admin";

initializeApp();
const db = getFirestore();

// const db = admin.firestore();

setGlobalOptions({ region: "asia-east1", maxInstances: 10 });

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld2 = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

export const scheduled2 = onSchedule("every 1 mins", async (event) => {
  logger.info("SCHEDULED START", { structuredData: true });
  const dataDocumentRef = db.collection("data").doc("data");
  const dataDocument = await dataDocumentRef.get();
  const data = dataDocument.data() as Data;

  logger.info(`data: ${data}`, { structuredData: true });
  if (!data.fish_type) return;

  const fishDataDocumentRef = db.collection("fishes").doc(data.fish_type);
  const fishDataDocument = await fishDataDocumentRef.get();
  const fishData = fishDataDocument.data() as FishData;
  logger.info(`fishData: ${fishData}`, { structuredData: true });

  const now = Date.now();
  const currentTime = new Date(now);

  const formattedTime = formatTime(currentTime);
  logger.info(`formattedTime: ${formattedTime}`, { structuredData: true });

  if (fishData.drain_schedules.includes(formattedTime)) {
    logger.info(`drain_schedules includes: ${formattedTime}`, {
      structuredData: true,
    });
    // Execute drain
    fishDataDocumentRef.update({ should_refill: true } as Partial<FishData>);
  }

  if (fishData.feeding_schedules.includes(formattedTime)) {
    logger.info(`feeding_schedules includes: ${formattedTime}`, {
      structuredData: true,
    });
    // Execute drain
    fishDataDocumentRef.update({ should_feed: true } as Partial<FishData>);
  }

  // logger.log("");
});

function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return date.toLocaleTimeString([], options);
}
