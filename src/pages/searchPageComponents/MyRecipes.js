import React, {useContext} from 'react';
import {UserContext} from "../../contexts/users_data";

const MyRecipe = () => {

  const {userRecipes} = useContext(UserContext);

  const myRecipeRender = userRecipes.map((item) =>
    <div>
      <h4>{item.name}</h4>
      <img src={item.image} alt=""/>
    </div>
  )

  return (
    <div>
      <h2>userName's Recipes</h2>
      { myRecipeRender }
    </div>
  );
};

export default MyRecipe;
