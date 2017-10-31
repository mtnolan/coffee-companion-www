import React, { Component } from 'react';
import Routes from './Routes';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World!</h1>
        </header>
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}
export default App;
