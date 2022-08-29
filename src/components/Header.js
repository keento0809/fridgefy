import React, {useState} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import {NavBarStyle} from "../pages/SearchPage.style";

const Header = () => {

  const userName = "user"
  const [userLogIn, setUserLogIn] = useState(true)

  const loginButton = <button>Log in</button>
  const logOutButton = <button>Log out</button>

  return (
    <NavBarStyle>
      < Link to='/'><h1>Fridgefy</h1></Link>
      <ul>
        <li>< Link to='/search'>Recipes</Link></li>
        <li>< Link to='/WishList'>My shopping List</Link></li>
        <li>Hello {userName}</li>
        { userLogIn? logOutButton : loginButton}
      </ul>
    </NavBarStyle>
  );
};

export default Header;
