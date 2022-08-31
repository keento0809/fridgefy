import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import axios from "axios";

const SearchMain = () => {

  const [recipeData, setRecipeData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [value, setValue] = useState("pasta");

  const getRecipeData = ingredients => {
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}&ingredients=${ingredients}`).then((res)=>{
      setRecipeData(res.data)
    }).catch(function (error) {
      console.error(error.message);
    });
  }

  useEffect(() => {
    getRecipeData(value)
    const filteredItems = recipeData.filter((item) =>
      item.title.toLowerCase().indexOf(value) !== -1
    )
    setFilteredRecipes(filteredItems)
  }, [value]);

  const recipesRender = recipeData.map(item =>
    < Recipe key={item.id}
             name={item.title}
             image={item.image}
    />
  )

  return (
    <main>
      <h2> Search Recipe</h2>
      <input
        type="search"
        placeholder="search recipes"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <h2>All Recipes</h2>
      { recipesRender }
    </main>
  );
};

export default SearchMain;
