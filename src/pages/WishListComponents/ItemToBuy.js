import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/users_data";

const ItemToBuy = () => {
  const { userFridge, userRecipes } = useContext(UserContext);

  userRecipes.length !== 0 && console.log(userRecipes);
  userFridge.length !== 0 && console.log(userFridge);

  // useEffect(() => {
  //   console.log("aa");
  // }, [userFridge.length]);

  return (
    <div>
      <h2>Item to Buy</h2>
    </div>
  );
};

export default ItemToBuy;
