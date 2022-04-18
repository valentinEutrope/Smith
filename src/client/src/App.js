import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "@config/theme/defaultTheme/GlobalStyle";

import Providers from "./Providers";
import Home from "@pages/Home";
import World from "@pages/World";
import SheetTemplate from "@pages/SheetTemplate";
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
            <Route exact path="/world/:id">
              <World />
            </Route>
            <Route exact path="/world/:id/templates">
              <SheetTemplate />
            </Route>
          </Switch>
        </Router>
      </Providers>
      <Toaster />
    </>
  );
};

export default App;
