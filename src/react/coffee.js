import React, { Component } from 'react';

type Props = {
  imageUrl: string,
  title: string,
  description: string,
};

export default class Coffee extends Component<Props> {
  render() {
    return (
      // <div className="coffee col-xs-12 col-sm-6 col-md-4">
      // <div className="coffee">
      //   <div className="coffee-body">
      //     <img src={this.props.imageUrl} />
      //     <div className="coffee-text">
      //       <div className="coffee-title">
      //         {this.props.title}
      //       </div>
      //       <div className="coffee-description">
      //         {this.props.description}
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="card bg-light">
        <img className="card-img-top" src={this.props.imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
