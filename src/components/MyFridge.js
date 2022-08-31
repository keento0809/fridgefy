import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../contexts/users_data";
import axios from "axios";


const MyFridge = () => {

  const { userFridge, setUserFridge } = useContext(UserContext);
  const [ ingredientsData, setIngredientsData] = useState([])
  const [ value, setValue ] = useState("banana");

  const getIngredientsData = ingredient => {
    axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}&query=${ingredient}&number=2`).then((res)=>{
      setIngredientsData(res.data)
    }).catch(function (error) {
      console.error(error.message);
    });
  }

  useEffect(() => {
    getIngredientsData(value);
    const filteredItems = ingredientsData.filter((item) =>
      item.name.toLowerCase().indexOf(value) !== -1
    )
    setIngredientsData(filteredItems)
  }, [value]);

  const filtered = ingredientsData.map(item =>
    <div key={ item.id }>
      <span>{ item.name }</span>
      <button onClick={() => { setUserFridge([...userFridge, {name: item.name, id: userFridge.length + 1}])}}>Add</button>
    </div>)

  const fridgeDataRender = userFridge.map(item =>
    <div key={ item.id }>
      <span>{ item.name }</span>
      <button onClick={() => { setUserFridge(userFridge.filter( data => data.id !== item.id ))}}>×</button>
  </div>)

  return (
    <div>
      <h2>Search food</h2>
      <input
        type="search"
        placeholder='search...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      { filtered }
      <h2>userName's Fridge</h2>
      { fridgeDataRender }
    </div>
  );
};

export default MyFridge;
