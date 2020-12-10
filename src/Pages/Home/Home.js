import React from "react";
import { Link } from "react-router-dom";

import { ButtonDanger } from "../../components/base/Buttons";

const Home = () => {
  return (
    <div className="App">
      <h1>SMITH</h1>
      <Link to="/login">
        <ButtonDanger radius="1rem">Se déconnecter</ButtonDanger>
      </Link>
    </div>
  );
};

export default Home;
