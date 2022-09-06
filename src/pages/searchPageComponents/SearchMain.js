import React, { useState, useEffect, useContext } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import { UserContext } from "../../contexts/users_data";
import styled from "styled-components";

const SearchMain = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [value, setValue] = useState("pasta");
  const { userFridge, userInfo } = useContext(UserContext);
  const { isLoggedIn } = userInfo;

  const getRecipeData = (ingredients) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}&ingredients=${ingredients}`
      )
      .then((res) => {
        setRecipeData(res.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };

  useEffect(() => {
    let ingredientsArr =
      userFridge &&
      userFridge
        .map((ingredient) => {
          return `${ingredient.name},+`;
        })
        .join(",");
    ingredientsArr = ingredientsArr.slice(0, ingredientsArr.length - 2);
    getRecipeData(ingredientsArr);
    const filteredItems = recipeData.filter(
      (item) => item.title.toLowerCase().indexOf(value) !== -1
    );
    setFilteredRecipes(filteredItems);
  }, [isLoggedIn, userFridge.length]);

  const recipesRender = recipeData.map((item) => (
    <Recipe
      key={item.id}
      id={item.id}
      name={item.title}
      image={item.image}
      missedIngredients={item.missedIngredients}
    />
  ));

  return (
    <div>
      
      <h2> Search Recipe</h2>
      <input
        type="search"
        placeholder="search recipes"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <h2>All Recipes</h2>
      {recipesRender}
      
    </div>
    
  );
};



export default SearchMain;
