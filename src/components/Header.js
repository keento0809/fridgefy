import React, { useContext, useEffect, useState } from "react";
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
import useDataContext from "../hooks/useDataContext";

const Header = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const { isLoggedIn, setIsLoggedIn } = useDataContext();

  const handleLogin = async () => {
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("token", user.uid);
        setUserName(user.displayName);
        setIsLoggedIn(true);
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
        setIsLoggedIn(false);
        setUserName("");
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
      <Link to="/">
        <h1>Fridgefy</h1>
      </Link>
      <ul>
        <li>
          <Link to="/WishList">My shopping List</Link>
        </li>
        <li>Hello {userName}</li>
        {isLoggedIn ? logOutButton : loginButton}
      </ul>
    </NavBarStyle>
  );
};

export default Header;
