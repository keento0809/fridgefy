import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/users_data";
import { db } from "../../firebase";
import {
  deleteDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const ItemToBuy = () => {
  const { userRecipes, userInfo, itemsToBuy, setItemsToBuy, bool, setBool } =
    useContext(UserContext);
  const { isLoggedIn, userId } = userInfo;

  const itemsToBuyRender = itemsToBuy.map((item, index) => (
    <div key={index}>
      <span>{item.name}</span>
      <button
        onClick={async () => {
          setItemsToBuy(itemsToBuy.filter((data) => data.name !== item.name));
          await deleteDoc(doc(db, "itemsToBuy", item.name));
        }}
      >
        ×
      </button>
    </div>
  ));

  const checkDB = async () => {
    if (isLoggedIn) {
      const itemsToBuyArr = [];
      const q = query(
        collection(db, "itemsToBuy"),
        where("id", "==", `${userId}`)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        itemsToBuyArr.push(doc.data());
      });
      setItemsToBuy(itemsToBuyArr);
    }
  };

  useEffect(() => {
    !bool && checkDB();
    setBool(false);
  }, [isLoggedIn, itemsToBuy.length]);

  return (
    <div>
      <h2>Item to Buy</h2>
      {itemsToBuyRender}
    </div>
  );
};

export default ItemToBuy;
