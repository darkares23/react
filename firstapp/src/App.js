import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import {todos} from './todos.json'
console.log(todos);

class App extends Component {
  constructor(){
    super();
    this.state={
      tittle: 'Task Aplication',
      ntask: 10
    }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <a href="" className="text-white">{this.state.tittle} - {this.state.ntask}</a>
        </nav>

        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
