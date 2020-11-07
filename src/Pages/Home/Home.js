import React from "react";
import { Link } from "react-router-dom";

import { ButtonRounded } from "../../components/base/Buttons";

const Home = () => {
  return (
    <div className="App">
      <h1>SMITH</h1>
      <Link to="/login">
        <ButtonRounded>Se déconnecter</ButtonRounded>
      </Link>
    </div>
  );
};

export default Home;
