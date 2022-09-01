import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/users_data";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const MyRecipe = () => {
  const { userRecipes, userInfo } = useContext(UserContext);
  const { userId, username } = userInfo;

  const myRecipeRender = userRecipes.map((item) => (
    <div>
      <h4>{item.name}</h4>
      <img src={item.image} alt="" />
    </div>
  ));

  const checkDB = async () => {
    const q = query(collection(db, "recipes"), where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };

  useEffect(() => {
    checkDB();
  }, [userRecipes.length]);

  return (
    <div>
      <h2>{username}'s Recipes</h2>
      {myRecipeRender}
    </div>
  );
};

export default MyRecipe;
