import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Card from '../pages/Card';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={Card} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
