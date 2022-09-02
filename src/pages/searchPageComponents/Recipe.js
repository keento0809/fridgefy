import React, { useState, useEffect, useContext } from "react";
import RecipeDetail from "./RecipeDetail";
import { UserContext, UserDataProvider } from "../../contexts/users_data";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const Recipe = ({ id, name, image, missedIngredients }) => {
  const [displayDetail, setDisplayDetail] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { userRecipes, setUserRecipes, userInfo, setItemsToBuy } =
    useContext(UserContext);
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
    await setDoc(doc(db, "recipes", item.name), {
      id: userId,
      recipeId: item.id,
      name: item.name,
      image: item.image,
      missedIngredients: item.missedIngredients,
    });
    item.missedIngredients.map(async (ingredient) => {
      await setDoc(doc(db, "itemsToBuy", ingredient.name), {
        id: userId,
        recipeId: item.id,
        name: ingredient.name,
      });
    });
  };

  useEffect(() => {
    const test = userRecipes.find((recipe) => recipe.name === name);
    test ? setIsClicked(true) : setIsClicked(false);
  }, [userRecipes.length]);

  return (
    <div>
      <h4>{name}</h4>
      <img src={image} style={{ width: "20rem" }} alt="" />
      <button onClick={displayModal}>More</button>
      <button
        onClick={() => addMyRecipe({ id, name, image, missedIngredients })}
        disabled={!isLoggedIn || isClicked}
      >
        Add
      </button>
      {displayDetail ? <RecipeDetail /> : null}
    </div>
  );
};

export default Recipe;
