import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Providers from "./Providers";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CharacterSheetTemplate from "./Pages/SheetTemplates/CharacterSheetTemplate";
import Back from "./Pages/Back";

const App = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/template/character-sheet">
            <CharacterSheetTemplate />
          </Route>
          <Route exact path="/back">
            <Back />
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
};

export default App;
