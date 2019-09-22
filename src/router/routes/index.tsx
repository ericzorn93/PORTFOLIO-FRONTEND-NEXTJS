import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { history } from '../history';
import HomePage from '../../pages/HomePage';

export const CustomRoutes = () => {
  return (
    <ConnectedRouter history={history}>
      {/* place ConnectedRouter under Provider */}
      <>
        {/* your usual react-router v4/v5 routing */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </>
    </ConnectedRouter>
  );
};
