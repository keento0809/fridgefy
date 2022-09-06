import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/users_data";
import styled from "styled-components";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const MyRecipe = () => {
  const {
    userRecipes,
    setUserRecipes,
    userInfo,
    itemsToBuy,
    setItemsToBuy,
    setBool,
  } = useContext(UserContext);
  const { userId, username, isLoggedIn } = userInfo;
  const [isLoading, setIsLoading] = useState(false);

  const myRecipeRender = userRecipes.map((item, index) => (
    <MyRecipeStyle>
    <div key={index} className="container">
      <h4>{item.name}</h4>
      <img src={item.image} alt="" />
      <button
        onClick={async () => {
          setIsLoading(true);
          setBool(true);
          setUserRecipes(userRecipes.filter((data) => data.id !== item.id));
          setItemsToBuy(
            itemsToBuy.filter((data) => data.recipeId !== item.recipeId)
          );
          await deleteDoc(doc(db, "recipes", item.name));
          const q = query(
            collection(db, "itemsToBuy"),
            where("recipeId", "==", item.recipeId)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(async (docSnapshot) => {
            await deleteDoc(doc(db, "itemsToBuy", docSnapshot.data().name));
          });
          setIsLoading(false);
        }}
      >
        ×
      </button>
    </div>
    </MyRecipeStyle>
  ));

  const checkDB = async () => {
    const recipeArr = [];
    if (isLoggedIn) {
      const q = query(
        collection(db, "recipes"),
        where("id", "==", `${userId}`)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        recipeArr.push(doc.data());
      });
      setUserRecipes(recipeArr);
    }
  };

  useEffect(() => {
    checkDB();
  }, [userRecipes.length, isLoggedIn, itemsToBuy.length]);

  return (
    <div>
      <h2>{username}'s Recipes</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <div>{myRecipeRender}</div>}
    </div>
  );
};

const MyRecipeStyle = styled.div`
.container{
  width: 40%;
  text-align: center;
  font-family: 'Inconsolata', monospace;
  height: 500px;
  background-color: #4D99A3;
}
h2{
  
  text-align: center;
  

}

`;
export default MyRecipe;
