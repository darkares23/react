import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <a href="www.youtube.com" className="text-white">
          {this.props.tittle}
        </a>
      </nav>
    )
  }
}
export default Navigation;
