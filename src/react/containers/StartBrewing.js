import React, { Component } from 'react';

export default class StartBrewing extends Component {
  render() {
    return (
      <div className="startBrewing">

        <div className="title">
          <h1>
            Coffee Companion
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum elit non ipsum efficitur, sit amet egestas purus condimentum. Aenean facilisis sagittis odio id iaculis. Phasellus congue sem non metus dictum, eget ullamcorper lectus porttitor.
          </p>
        </div>
        <div className="buttons">
          <button className="btn btn-success btn-lg">Start Brewing!</button>
        </div>

      </div>
    );
  }
}
