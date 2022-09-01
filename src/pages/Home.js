import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate, Navigate } from "react-router-dom";
import googleLogin from "../helper/googleLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useDataContext from "../hooks/useDataContext";

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useDataContext();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const auth = getAuth();

  const checkIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        setIsLoggedIn(true);
      }
    });
  };

  const signIn = async () => {
    googleLogin();
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, [signIn]);

  // if (userName) return <Navigate to="/search" />;
  if (isLoggedIn) return <Navigate to="/search" />;

  return (
    <div>
      <h1>Welcome to our application</h1>
      <GoogleButton onClick={signIn} />
      {/* <Testing /> */}
    </div>
  );
};

export default Home;
