import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/users_data";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const MyRecipe = () => {
  const { userRecipes, setUserRecipes, userInfo } = useContext(UserContext);
  const { userId, username, isLoggedIn } = userInfo;

  const myRecipeRender = userRecipes.map((item, index) => (
    <div key={index}>
      <h4>{item.name}</h4>
      <img src={item.image} alt="" />
      <button
        onClick={async () => {
          setUserRecipes(userRecipes.filter((data) => data.id !== item.id));
          await deleteDoc(doc(db, "recipes", item.name));
        }}
      >
        ×
      </button>
    </div>
  ));

  const checkDB = async () => {
    const recipeArr = [];
    if (isLoggedIn) {
      const q = query(
        collection(db, "recipes"),
        where("id", "==", `${userId}`)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        recipeArr.push(doc.data());
      });
      setUserRecipes(recipeArr);
    }
  };

  useEffect(() => {
    checkDB();
  }, [userRecipes.length, isLoggedIn]);

  return (
    <div>
      <h2>{username}'s Recipes</h2>
      {myRecipeRender}
    </div>
  );
};

export default MyRecipe;
