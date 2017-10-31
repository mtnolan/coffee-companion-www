import React, { Component } from 'react';
import Routes from './Routes';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="nav-bar">
          <div className="title">
            Coffee Companion
          </div>
        </div>
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}
export default App;
