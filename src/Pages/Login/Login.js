import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <Link to="/">
        <button type="submit">Se connecter</button>
      </Link>
    </form>
  );
};

export default Login;
