import React from "react";
import { Link } from "react-router-dom";

import WorldList from "../../components/WorldList";
import { ButtonDanger, Button } from "../../components/base/Buttons";

const Home = () => {
  return (
    <div className="App">
      <h1>SMITH</h1>
      <Link to="/template/character-sheet">
        <Button radius={1}>Fiche personnage</Button>
      </Link>
      <WorldList />
    </div>
  );
};

export default Home;
