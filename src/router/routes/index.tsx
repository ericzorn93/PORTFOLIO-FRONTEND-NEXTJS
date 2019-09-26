import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { history } from '../history';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/404';

export const CustomRoutes = () => {
  return (
    <ConnectedRouter history={history}>
      {/* place ConnectedRouter under Provider */}
      <>
        {/* your usual react-router v4/v5 routing */}
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/404" component={NotFoundPage} />
          <Route render={() => {
            return (<Redirect to='/404' />)
          }} />
        </Switch>
      </>
    </ConnectedRouter>
  );
};
