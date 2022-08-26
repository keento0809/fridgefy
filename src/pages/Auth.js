import React from "react";
import googleLogin from "../helper/googleLogin";

const Auth = () => {
  const handleLogin = () => {
    googleLogin();
  };
  return (
    <div>
      <h1>Google Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
