import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Pokemon from '~/pages/Pokemon';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Switch>
);

export default Routes;
