import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Profile from '../pages/Profile';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
