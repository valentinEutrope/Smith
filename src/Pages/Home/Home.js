import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h1>SMITH</h1>
      <Link to="/login">se déconnecter</Link>
      <br></br>
      <Link to="/back">Test serveur back</Link>
    </div>
  );
};

export default Home;
