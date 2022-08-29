import React from 'react';
import {GoogleButton} from "react-google-button";

const Home = () => {

  const signIn = () => {
    console.log("Sign In!!!")
  }

  return (
    <div>
      <h1>Welcome to our application</h1>
      < GoogleButton onClick={signIn}/>
    </div>
  );
};

export default Home;
