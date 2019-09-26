import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { history } from '../history';
import HomePage from '../../pages/home/HomePage';
import NotFoundPage from '../../pages/404/404Page';
import ContactPage from '../../pages/contact/ContactPage';

export const CustomRoutes = () => {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </ConnectedRouter>
  );
};
