// @flow
import React, { Component } from 'react';
import type {CoffeeData} from './types';

type Props = {
  data: CoffeeData,
};

export default class CoffeeDisplayCard extends Component<Props> {
  render() {
    const imgSrc =
      this.props.data.Image !== undefined
      && this.props.data.Image !== ''
        ? this.props.data.Image
        : '/images/default_coffee.jpg';

    return (
      <div className="coffeeDisplayCard card">
        <img src={imgSrc} />
        <div className="text">
          <div className="title">
            <h1>
              {this.props.data.Title}
            </h1>
            <p>
              {this.props.data.Description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
