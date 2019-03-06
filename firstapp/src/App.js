import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation tittle="Dashboard"/>
        <Navigation tittle="UI"/>
        <Navigation tittle="Pages"/>

        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
