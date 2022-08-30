import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { NavBarStyle } from "../pages/SearchPage.style";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { provider } from "../firebase";
import googleLogin from "../helper/googleLogin";
import logout from "../helper/logout";

const Header = () => {
  const userName = "user";
  const [userLogIn, setUserLogIn] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    googleLogin();
    await navigate("/search");
  };

  const handleLogout = async () => {
    logout();
    await navigate("/");
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
          <Link to="/search">Recipes</Link>
        </li>
        <li>
          <Link to="/WishList">My shopping List</Link>
        </li>
        <li>Hello {userName}</li>
        {userLogIn ? logOutButton : loginButton}
      </ul>
    </NavBarStyle>
  );
};

export default Header;
