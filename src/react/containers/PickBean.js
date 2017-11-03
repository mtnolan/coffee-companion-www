import React, { Component } from 'react';
import CoffeeList from '../CoffeeList';

export default class PickBean extends Component {

  render() {
    return (
      <div className="pickBean">
        <div className="title">
          <h1>
            Select a bean to start brewing!
          </h1>
        </div>
        <CoffeeList />
      </div>
    );
  }
}
