import React, { useState, useEffect, useContext } from "react";
import RecipeDetail from "./RecipeDetail";
import { UserContext } from "../../contexts/users_data";

const Recipe = ({ name, image }) => {
  const [displayDetail, setDisplayDetail] = useState(false);
  const { userRecipes, setUserRecipes } = useContext(UserContext);
  const displayModal = () => {
    setDisplayDetail(!displayDetail);
  };

  const addMyRecipe = (item) => {
    setUserRecipes([...userRecipes, { name: item.name, image: item.image }]);
  };

  return (
    <div>
      <h4>{name}</h4>
      <img src={image} style={{ width: "20rem" }} alt="" />
      <button onClick={displayModal}>More</button>
      <button onClick={() => addMyRecipe({ name, image })}>Add</button>
      {displayDetail ? <RecipeDetail /> : null}
    </div>
  );
};

export default Recipe;
