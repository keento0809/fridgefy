import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavBarStyle } from "../pages/SearchPage.style";
import googleLogin from "../helper/googleLogin";
import logout from "../helper/logout";
import { provider } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { UserContext } from "../contexts/users_data";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const {
    userInfo,
    setUserInfo,
    setUserRecipes,
    setUserFridge,
    setItemsToBuy,
  } = useContext(UserContext);
  const { isLoggedIn, username } = userInfo;

  const handleLogin = async () => {
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("token", user.uid);
        setUserInfo({
          isLoggedIn: true,
          userId: user.uid,
          username: user.displayName,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleLogout = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Logout succeeded");
        setUserInfo({ isLoggedIn: false, userId: "", username: "user" });
        setUserRecipes([]);
        setUserFridge([]);
        setItemsToBuy([]);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Logout failed");
      });
  };

  const loginButton = <button onClick={handleLogin}>Log in</button>;
  const logOutButton = <button onClick={handleLogout}>Log out</button>;

  return (
    <NavBarStyle>
      <div>
      <Link to="/" className="link-fridgefy" >
        <h1>FRIDGEFY</h1>
      </Link>
      <ul>
        <li>
          <Link to="/WishList">My shopping List</Link>
        </li>
        <li>Hello {username}</li>
        {isLoggedIn ? logOutButton : loginButton}
      </ul>
      </div>
    </NavBarStyle>
  );
};




export default Header;
