import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/users_data";

const ItemToBuy = () => {
  const { userFridge, userRecipes, userInfo } = useContext(UserContext);
  const { isLoggedIn } = userInfo;
  const [itemsToBuyList, setItemsToBuyList] = useState([]);

  const itemsToBuyRender = itemsToBuyList.map((item, index) => (
    <div key={index}>
      <span>{item}</span>
      <button
        onClick={async () => {
          setItemsToBuyList(itemsToBuyList.filter((data) => data !== item));
          // await deleteDoc(doc(db, "itemsToBuy", item));
        }}
      >
        ×
      </button>
    </div>
  ));

  useEffect(() => {
    if (isLoggedIn) {
      console.log(userRecipes);
      const updateArr = [];
      for (const obj of userRecipes) {
        obj.missedIngredients.forEach((ingredient) => {
          updateArr.push(ingredient.name);
        });
      }
      setItemsToBuyList(updateArr);
    }
  }, [isLoggedIn, userRecipes.length]);

  return (
    <div>
      <h2>Item to Buy</h2>
      {itemsToBuyRender}
    </div>
  );
};

export default ItemToBuy;
