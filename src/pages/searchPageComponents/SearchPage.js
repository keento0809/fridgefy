import React, { useEffect } from "react";
import MyFridge from "../../components/MyFridge";
import SearchMain from "./SearchMain";
import MyRecipe from "./MyRecipes";
import { PageContainer } from "../SearchPage.style";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

const SearchPage = () => {
  const uid = localStorage.getItem("token");

  const checkQueryFunc = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("id", "==", `${uid}`));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      data.push(doc.data());
    });
    if (data.length === 0) {
      setDoc(doc(db, "users", uid), {
        id: uid,
        myFridge: [],
        myRecipe: [],
        itemsToBuy: [],
      });
    }
  };

  // useEffect(() => {
  //   checkQueryFunc();
  // }, []);

  return (
    <PageContainer>
      <MyFridge />
      <SearchMain />
      <MyRecipe />
    </PageContainer>
  );
};

export default SearchPage;
