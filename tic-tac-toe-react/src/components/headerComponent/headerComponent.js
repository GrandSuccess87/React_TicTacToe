import React, { Component } from 'react';
import gameLogo from '../../Game-Icon.png'; 
import '../../App.css';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The logo was successfully clicked');
  };
  return (
    <a href="#" onClick={handleClick}></a>
  );
}

class Header extends Component {
    render() {
      return (
        <div className="App">
            <header className="App-header">
                <p>
                Welcome to Tic Tac Toe in ReactJs
                </p>
                <img src={gameLogo} className="App-logo" alt="logo" />
                {/* <a href="#" onClick={handleClick}><img src={gameLogo} className="App-logo" alt="logo" /></a> */}
            </header>
        </div>
    );
  }
}

export default Header;
