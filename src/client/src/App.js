import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "@config/theme/defaultTheme/GlobalStyle";

import Providers from "./Providers";
import Home from "@pages/Home";
import CharacterSheetTemplate from "@pages/SheetTemplates/CharacterSheetTemplate";
import World from "@pages/World";
import NewWorld from "@pages/NewWorld";
import Header from "@components/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/new-world">
              <NewWorld />
            </Route>
            <Route exact path="/template/character-sheet">
              <CharacterSheetTemplate />
            </Route>
            <Route exact path="/world/:ID">
              <World />
            </Route>
          </Switch>
        </Router>
      </Providers>
      <Toaster />
    </>
  );
};

export default App;
