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
import { UserContext } from "../contexts/users_data";

const Header = () => {
  // const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const { setUserId, userInfo, setUserInfo, setUserRecipe, setUserFridge } =
    useContext(UserContext);
  const { isLoggedIn, username } = userInfo;

  const handleLogin = async () => {
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("token", user.uid);
        // setUserName(user.displayName);
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
        setUserRecipe([]);
        setUserFridge([]);
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
        <li>Hello {username}</li>
        {isLoggedIn ? logOutButton : loginButton}
      </ul>
    </NavBarStyle>
  );
};

export default Header;
