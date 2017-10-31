import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartBrewing from './containers/StartBrewing';

export default () =>
  <Switch>
    <Route path="/" exact component={StartBrewing} />
  </Switch>;
