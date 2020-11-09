import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Providers from "./Providers";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

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
        </Switch>
      </Router>
    </Providers>
  );
};

export default App;
