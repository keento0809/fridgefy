import React, {useState, useEffect} from 'react';
import RecipeDetail from "./RecipeDetail";
import axios from "axios";

const Recipe = ({name, image}) => {
  const [displayDetail, setDisplayDetail] = useState(false)

  const displayModal = () => {
    setDisplayDetail(!displayDetail)
  }

  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY_SPOONACULAR}`).then((response)=>{
      console.log('recepies',response.data);
    }).catch(function (error) {
        console.error(error);
      });

    // I Moved the Ingredients Axios to ItemsToBuy.js I leave it here just in case you need to see the data
    //---------------
    // axios.get("https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}&query=apples&flour&sugar&number=2").then((res)=>{
    //   console.log('ingredients',res.data);
    // }).catch(function (error) {
    //     console.error(error);
    //   });
  },[]);

  return (
    <div>
      <h4>{ name }</h4>
      <img src={`${image}`} style={{width: "20rem"}} alt=""/>
      <button onClick={displayModal}>More</button>
      <button>Add</button>
      { displayDetail ? < RecipeDetail /> : null }
    </div>
  );
};

export default Recipe;
