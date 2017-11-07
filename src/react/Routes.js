import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartBrewing from './containers/StartBrewing';
import PickBean from './containers/PickBean';
import NowBrewing from './containers/NowBrewing';

export default () =>
  <Switch>
    <Route path="/" exact component={StartBrewing} />
    <Route path="/pick-bean" exact component={PickBean} />
    <Route path="/now-brewing" exact component={NowBrewing} />
  </Switch>;
