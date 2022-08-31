import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBarStyle } from "../pages/SearchPage.style";
import { useNavigate } from "react-router-dom";
import googleLogin from "../helper/googleLogin";
import logout from "../helper/logout";
import { provider } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const Header = () => {
  const [userName, setUserName] = useState("user");
  const [userLogIn, setUserLogIn] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // googleLogin();
    // await navigate("/search");
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("token", user.uid);
        console.log(user);
        setUserName(user.displayName);
        navigate("/search");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return;
      });
  };

  const handleLogout = async () => {
    // logout();
    // await navigate("/");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Logout succeeded");
        navigate("/");
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
