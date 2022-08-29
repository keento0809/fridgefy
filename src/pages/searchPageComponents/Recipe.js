import React, {useState} from 'react';
import RecipeDetail from "./RecipeDetail";

const Recipe = ({name, image}) => {

  const [displayDetail, setDisplayDetail] = useState(false)

  const displayModal = () => {
    setDisplayDetail(!displayDetail)
  }

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
