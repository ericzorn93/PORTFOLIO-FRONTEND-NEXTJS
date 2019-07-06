import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
