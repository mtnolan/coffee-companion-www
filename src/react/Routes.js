import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartBrewing from './containers/StartBrewing';
import CoffeeList from './CoffeeList';

export default () =>
  <Switch>
    <Route path="/" exact component={StartBrewing} />
    <Route path="/pickbean" exact component={CoffeeList} />
  </Switch>;
