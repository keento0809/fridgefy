import React, { useEffect } from "react";

const Testing = () => {
  const fetchData = async () => {
    //   "https://api.spoonacular.com/recipes/complexSearch?apiKey=2778c6993b284fca84bb502eeeb062c9"
    const response = await fetch(
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=sugar&number=2?apiKey=2778c6993b284fca84bb502eeeb062c9",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Testing</div>;
};

export default Testing;
