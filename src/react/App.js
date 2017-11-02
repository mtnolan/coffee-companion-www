import React, { Component } from 'react';
import Routes from './Routes';
import ReportSpill from './ReportSpill';
import NavBar from './NavBar';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-background">
          <div className="background-image" />
          <div className="background-overlay" />
        </div>
        <div className="app">
          <NavBar />
          <div className="container site-content">
            <Routes />
          </div>
          <ReportSpill />
        </div>
      </div>
    );
  }
}
export default App;
