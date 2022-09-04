import React, {useEffect, useState} from 'react';
import axios from "axios";
import recipe from "./Recipe";
import {Modal} from "../../components/styles/RecipeDetail.style";

const RecipeDetail = ({setDisplayDetail, displayDetail, name, image, id}) => {

  console.log(id)
  const [recipeDetail, setDetails] = useState([])
  const getRecipeDetails = (id) => {
    axios
      .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}&includeNutrition=false`)
      .then(res => {
        setDetails([...res.data.analyzedInstructions[0].steps])
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(()=>{
    getRecipeDetails(id);
  },[id])

  return (
    <Modal>
      <h1>{name}</h1>
      <img src={image} alt=""/>
      <h3>Recipe</h3>
      { recipeDetail ? recipeDetail.map(step => <p><span>{step.number}.</span>{step.step}</p>) : null}
      <button onClick={() => setDisplayDetail(!displayDetail)}>close</button>
    </Modal>
  );
};

export default RecipeDetail;
