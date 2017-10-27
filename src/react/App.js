import React, { Component } from 'react';
import CoffeeList from './coffee_list'
import '../App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World!</h1>
        </header>
        <div className="container">
          <CoffeeList />
        </div>
      </div>
    );
  }


}

export default App;
