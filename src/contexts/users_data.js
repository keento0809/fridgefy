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

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        userFridge,
        userRecipes,
        setUserFridge,
        setUserRecipes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
