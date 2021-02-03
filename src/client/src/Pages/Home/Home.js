import React from "react";
import { Link } from "react-router-dom";

import { ButtonDanger, Button } from "../../components/base/Buttons";

const Home = () => {
  return (
    <div className="App">
      <h1>SMITH</h1>
      <Link to="/login">
        <ButtonDanger radius={1}>Se déconnecter</ButtonDanger>
      </Link>
      <Link to="/template/character-sheet">
        <Button radius={1}>Fiche personnage</Button>
      </Link>
      <br></br>
      <Link to="/back">Test serveur back</Link>
    </div>
  );
};

export default Home;
