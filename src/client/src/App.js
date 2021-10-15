import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./config/theme/defaultTheme/GlobalStyle";

import Providers from "./Providers";
import Home from "./Pages/Home";
import CharacterSheetTemplate from "./Pages/SheetTemplates/CharacterSheetTemplate";
import World from "./Pages/World";
import NewWorld from "./Pages/NewWorld";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <Router>
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
    </>
  );
};

export default App;
