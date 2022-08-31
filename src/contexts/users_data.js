import {createContext, useState} from "react";

export const UserContext = createContext();
export const UserDataProvider = ({ children }) => {

  const [userFridge, setUserFridge] = useState([]);
  const [userRecipes, setUserRecipes ] = useState([]);

  return(
    < UserContext.Provider value={{userFridge, userRecipes, setUserFridge, setUserRecipes}}>
      { children }
    </UserContext.Provider>
  )
}