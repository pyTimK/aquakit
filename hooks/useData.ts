import { Data, constructEmptyData } from "./../classes/Fish";
import { db } from "@/app/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const dataDocRef = doc(db, "data", "data");

const useData = () => {
  const [data, setData] = useState(constructEmptyData());

  const updateData = async (new_fields: Partial<Data>) => {
    await updateDoc(dataDocRef, { ...new_fields });
  };

  useEffect(() => {
    const unsub = onSnapshot(dataDocRef, (doc) => {
      const data = doc.data();
      setData((data as Data) ?? constructEmptyData());
      console.log(data);
    });
    return () => unsub();
  }, []);

  return { data, updateData };
};

export default useData;
