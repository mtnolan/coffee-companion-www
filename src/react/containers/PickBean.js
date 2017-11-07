// @flow
import React, { Component } from 'react';
import CoffeeList from '../CoffeeList';

type Props = {
  onPick: Function,
  history: Object,
};

export default class PickBean extends Component<Props> {

  render() {
    return (
      <div className="pickBean">
        <div className="title">
          <h1>
            Select a bean to start brewing!
          </h1>
        </div>
        <CoffeeList onPick={this.props.onPick} history={this.props.history} />
      </div>
    );
  }
}
