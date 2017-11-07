// @flow
import React, { Component } from 'react';

type Props = {
  id: string,
  imageUrl: string,
  title: string,
  description: string,
  selectedCallback: Function,
};

export default class CoffeeCard extends Component<Props> {
  render() {
    const imgSrc =
      this.props.imageUrl !== undefined
      && this.props.imageUrl !== ''
        ? this.props.imageUrl
        : '/images/default_coffee.jpg';

    return (
      <div
        className="card coffee-card"
        onClick={this.props.selectedCallback}
        role="presentation">
        <div className="image-container">
          <img
            className="card-img-top"
            src={imgSrc}
            alt="Coffee image"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
