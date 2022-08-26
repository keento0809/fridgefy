import React from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const setNewData = (data,collection) => {
  const updateRef = doc(db,collection,data);
  await updateDoc(updateRef,{
    capital: true
  })
};

export default setNewData;
