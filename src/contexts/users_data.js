import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserDataProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isLoggedIn: false,
    userId: "",
    username: "user",
  });
  const [userFridge, setUserFridge] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [itemsToBuy, setItemsToBuy] = useState([])

  return (
    <UserContext.Provider
      value={{
        userInfo,
        userFridge,
        userRecipes,
        itemsToBuy,
        setUserInfo,
        setUserFridge,
        setUserRecipes,
        setItemsToBuy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
