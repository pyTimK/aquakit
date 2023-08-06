import { db } from "@/app/firebase";
import { Fish, FishData, constructEmptyFishData } from "@/classes/Fish";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface UseFishDataParam {
  fish: Fish;
}

const useFishData = ({ fish }: UseFishDataParam) => {
  const fishDataDocRef = doc(db, "fishes", fish.name);

  const [fishData, setFishData] = useState(constructEmptyFishData());

  const updateFishData = async (new_fields: Partial<FishData>) => {
    await updateDoc(fishDataDocRef, { ...new_fields });
  };

  useEffect(() => {
    const unsub = onSnapshot(fishDataDocRef, (doc) => {
      const data = doc.data();
      setFishData((data as FishData) ?? constructEmptyFishData());
      console.log(data);
    });
    return () => unsub();
  }, [fish]);

  return { fishData, updateFishData };
};

export default useFishData;
