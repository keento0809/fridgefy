import React,{useEffect} from 'react'
import axios from 'axios';
import {StyleItemsToBuy} from './styles/ItemsToBuy.styles';

export default function ItemsToBuy() {
  // Needed: variables for the query & number
  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${REACT_APP_API_KEY_SPOONACULAR}&query=apples&flour&sugar&number=2`).then((res)=>{
      console.log('ingredients',res.data);
    }).catch(function (error) {
        console.error(error);
      });
  },[]);
  return (
    <StyleItemsToBuy>
        <div>
            ItemsToBuy
        </div>
    </StyleItemsToBuy>

  )
}
