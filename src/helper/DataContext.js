import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myFridge, setMyFridge] = useState([]);
  const [itemsToBuy, setItemsToBuy] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  // Note: Need to include the States of Recepies & Ingredients
  //   const myRecepies = [];
  const values = {
    isLoggedIn,
    setIsLoggedIn,
    myFridge,
    setMyFridge,
    itemsToBuy,
    setItemsToBuy,
    myRecipes,
    setMyRecipes,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
export default DataProvider;
