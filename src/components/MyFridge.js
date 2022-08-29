import React, {useEffect, useState} from 'react';
import {usersFridge} from "../FakeData";

const MyFridge = () => {
  /**
   * TODO : After get decent data, modify remove function
   */
  const [value, setValue] = useState("");
  const [fridgeData, setFridgeData] = useState(usersFridge);
  const [newFridge, setNewFridge] = useState([]);

  useEffect(() => {
    const filteredItems = fridgeData.filter((item) =>
      item.item.toLowerCase().indexOf(value) !== -1
    )
    setNewFridge(filteredItems)
  }, [value]);

  const fridgeDataRender = fridgeData.map(item =>
    <div key={item.id}>
      <span>{ item.item }</span>
      <button onClick={() => {setFridgeData(fridgeData.filter( data => data.id !== item.id ))}}>×</button>
  </div>)

  const newFridgeDataRender = newFridge.map(item =>
    <div key={item.id}>
      <span>{ item.item }</span>
      <button onClick={() => {setNewFridge(newFridge.filter( data => data.id !== item.id ))}}>×</button>
    </div>)

  return (
    <div>
      <h2>userName's Fridge</h2>
      <input
        type="search"
        placeholder='search...'
        onChange={(e) => setValue(e.target.value)}
      />
      { !newFridge?　fridgeDataRender : newFridgeDataRender }
    </div>
  );
};

export default MyFridge;
