import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../../pages/Home";

const EZRouter: React.FC = () => {
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

export default EZRouter;
