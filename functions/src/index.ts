// import { Data } from "./../../classes/Fish";
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
interface Data {
  fish_type: string;
  ph: number;
  temp: number;
}

interface FishData {
  drain_duration: number;
  feeding_duration: number;
  should_feed: boolean;
  should_refill: boolean;
  target_temp: number;
  drain_schedules: string[];
  feeding_schedules: string[];
}

initializeApp();

// const db = admin.firestore();

setGlobalOptions({ region: "asia-east1", maxInstances: 10 });

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld2 = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

export const scheduled2 = onSchedule("every 1 mins", async (event) => {
  const db = getFirestore();
  const dataDocumentRef = db.collection("data").doc("data");
  const dataDocument = await dataDocumentRef.get();
  const data = dataDocument.data() as Data;

  // logger.info(`SCHEDULED START12: ${data.fish_type}`, {
  //   structuredData: true,
  // });
  logger.info(`fish_type: ${data.fish_type}`, { structuredData: true });
  if (!data.fish_type) return;

  const fishDataDocumentRef = db.collection("fishes").doc(data.fish_type);
  const fishDataDocument = await fishDataDocumentRef.get();
  const fishData = fishDataDocument.data() as FishData;
  logger.info(`Drain Schedules: ${fishData.drain_schedules}`, {
    structuredData: true,
  });

  // get the current date

  const now = Date.now();

  const currentTime = new Date(now);
  currentTime.setHours(currentTime.getHours() + 8);

  const formattedTime = formatTime(currentTime);
  logger.info(`formattedTime: ${formattedTime}`, { structuredData: true });
  let drain_schedules_str = "";
  fishData.drain_schedules.forEach((element) => {
    drain_schedules_str += element + ", ";
  });
  logger.info(`Drain Schedules: ${drain_schedules_str}`, {
    structuredData: true,
  });

  const should_refill = fishData.drain_schedules.includes(formattedTime);
  const should_feed = fishData.feeding_schedules.includes(formattedTime);

  logger.info(`should_refill: ${should_refill}`, { structuredData: true });
  logger.info(`should_feed: ${should_feed}`, { structuredData: true });

  fishDataDocumentRef.update({
    should_refill: should_refill,
  } as Partial<FishData>);

  fishDataDocumentRef.update({
    should_feed: should_feed,
  } as Partial<FishData>);

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
