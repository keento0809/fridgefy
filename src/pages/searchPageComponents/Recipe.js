import React, { useState, useEffect, useContext } from "react";
import RecipeDetail from "./RecipeDetail";
import { UserContext, UserDataProvider } from "../../contexts/users_data";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const Recipe = ({ name, image, missedIngredients }) => {
  const [displayDetail, setDisplayDetail] = useState(false);
  const { userRecipes, setUserRecipes, userInfo } = useContext(UserContext);
  const { userId, isLoggedIn } = userInfo;
  const displayModal = () => {
    setDisplayDetail(!displayDetail);
  };

  const addMyRecipe = async (item) => {
    setUserRecipes([
      ...userRecipes,
      {
        name: item.name,
        image: item.image,
        missedIngredients: missedIngredients,
      },
    ]);
    // setNewData("recipes", item);
    await setDoc(doc(db, "recipes", item.name), {
      id: userId,
      name: item.name,
      image: item.image,
      missedIngredients: item.missedIngredients,
    });
  };

  return (
    <div>
      <h4>{name}</h4>
      <img src={image} style={{ width: "20rem" }} alt="" />
      <button onClick={displayModal}>More</button>
      <button
        onClick={() => addMyRecipe({ name, image })}
        disabled={!isLoggedIn}
      >
        Add
      </button>
      {displayDetail ? <RecipeDetail /> : null}
    </div>
  );
};

export default Recipe;
