import { setDoc, doc, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate, Navigate } from "react-router-dom";
import googleLogin from "../helper/googleLogin";
import { provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const signIn = async () => {
    googleLogin()
      .then((res) => console.log(res))
      .catch((error) => console.log());
    // const auth = getAuth();
    // await signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     const user = result.user;
    //     localStorage.setItem("token", user.uid);
    //     console.log(user);
    //     setUserName(user.displayName);
    //     navigate("/search");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     const email = error.customData.email;
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     return;
    //   });
    // await navigate("/search");
  };
  if (userName) return <Navigate to="/search" />;
  return (
    <div>
      <h1>Welcome to our application</h1>
      <GoogleButton onClick={signIn} />
      {/* <Testing /> */}
    </div>
  );
};

export default Home;
