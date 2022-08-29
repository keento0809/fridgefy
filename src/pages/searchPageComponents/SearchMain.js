import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import {recipes} from "../../FakeData";

const SearchMain = () => {

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredItems = recipes.filter((item) =>
      item.name.toLowerCase().indexOf(value) !== -1
    )
    setFilteredRecipes(filteredItems)
  }, [value]);


  const recipesRender = recipes.map(item =>
    < Recipe key={item.id}
             name={item.name}
             image={item.image}
    />
  )

  const filteredRecipeRender = filteredRecipes.map(recipe =>
    < Recipe key={recipe.id}
             name={recipe.name}
             image={recipe.image}
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
      <h2>Filtered Area</h2>
      { ! value ? "Let's start search!!" : filteredRecipeRender }
      <h2>All Recipes</h2>
      {recipesRender}
    </main>
  );
};

export default SearchMain;
