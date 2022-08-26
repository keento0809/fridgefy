import React from "react";
import { db, setDoc } from "../firebase";

const setNewUser = (username) => {
  await setDoc(doc(db,"users",username),{
    myFridge: [],
    recipes: [],
    itemsToBuy: [],
  })
};

export default setNewUser;
