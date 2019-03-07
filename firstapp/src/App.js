import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json'
import TodoForm from './components/TodoForms.js'


class App extends Component {
  constructor(){
    super();
    this.state={
      todos
    }
  }
  render() {
      const todos = this.state.todos.map((todo , i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.tittle}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><b>{todo.responsible}</b></p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">

          <nav className="navbar navbar-dark bg-dark">
            <a href="./App.js" className="text-white">
                Task
              <span className="badge bagde-pill badge-light ml-2">
              { this.state.todos.length }
              </span>
            </a>
          </nav>

          <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm />
              </div>
              <div className="col-md-9">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
