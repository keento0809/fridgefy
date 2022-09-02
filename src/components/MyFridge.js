import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/users_data";
import axios from "axios";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const MyFridge = () => {
  const { userFridge, setUserFridge, userInfo } = useContext(UserContext);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [inputClassName, setInputClassName] = useState("")
  const [value, setValue] = useState("banana");
  const { username, userId, isLoggedIn } = userInfo;

  const getIngredientsData = (ingredient) => {
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}&query=${ingredient}&number=2`
      )
      .then((res) => {
        setIngredientsData(res.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getIngredientsData(value);
    const filteredItems = ingredientsData.filter(
      (item) => item.name.toLowerCase().indexOf(value) !== -1
    );
    setIngredientsData(filteredItems);
  }, [value]);

  const filtered = ingredientsData.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span>
      <button
        onClick={async () => {
          setUserFridge([
            ...userFridge,
            { name: item.name, id: userFridge.length + 1 },
          ]);
          await setDoc(doc(db, "fridges", item.name), {
            id: userId,
            name: item.name,
          });
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  ));

  const fridgeDataRender = userFridge.map((item, index) => (
    <div key={index}>
      <span>{item.name}</span>
      <button
        onClick={async () => {
          setUserFridge(userFridge.filter((data) => data.name !== item.name));
          await deleteDoc(doc(db, "fridges", item.name));
        }}
      >
        ×
      </button>
    </div>
  ));

  useEffect(() => {
    const checkDB = async () => {
      const fridgeArr = [];
      if (isLoggedIn) {
        const q = query(
          collection(db, "fridges"),
          where("id", "==", `${userId}`)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          fridgeArr.push(doc.data());
        });
      }
      setUserFridge(fridgeArr);
    };
    checkDB();
  }, [isLoggedIn]);

  const fridgeSearchHandler = (e) => {
    let validationArr = e.target.value.split(/\s+/);
    const hasDuplicate = arr => {
      return new Set(arr).size !== arr.length;
    }
    if(hasDuplicate(validationArr)){
      setInputClassName("input__style")
    } else {
      setValue(e.target.value)
    }
  }

  return (
    <div　>
      <h2>Search food</h2>
      <input
        className={inputClassName}
        type="search"
        placeholder="search ingredients"
        value={value}
        onChange={fridgeSearchHandler}
      />
      {filtered}
      <h2>{username}'s Fridge</h2>
      {fridgeDataRender}
    </div>
  );
};

export default MyFridge;
