import React, { Component } from 'react';

type Props = {
  imageUrl: string,
  title: string,
  description: string,
};

export default class CoffeeCard extends Component<Props> {
  render() {
    return (
      <div className="card coffee-card">
        <img
          className="card-img-top"
          src={this.props.imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
