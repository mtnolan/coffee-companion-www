import React, { Component } from 'react';

export default class StartBrewing extends Component {
  render() {
    return (
      <div className="startBrewing">
        <div className="btn-group-vertical">
          <button className="btn btn-success btn-lg">btn</button>
          <button type="button" className="btn btn-outline-danger btn-lg">Report a Spill!</button>
        </div>
      </div>
    );
  }
}
