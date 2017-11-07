// @flow
import React, { Component } from 'react';

type Props = {};
type State = {
  breakpointSize: string,
};

export default class CoffeeList extends Component<Props, State> {
  render() {
    return (
      <div className="nav-bar">
        <div className="background">
          <div className="background-image" />
          <div className="background-overlay" />
        </div>
        <div className="title">
          Coffee Companion
        </div>
      </div>
    );
  }
}
