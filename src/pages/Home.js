import React from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Testing from "../components/Testing";
import googleLogin from "../helper/googleLogin";

const Home = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    googleLogin();
    await navigate("/search");
  };

  return (
    <div>
      <h1>Welcome to our application</h1>
      <GoogleButton onClick={signIn} />
      {/* <Testing /> */}
    </div>
  );
};

export default Home;
