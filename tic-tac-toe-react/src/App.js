import React, { Component } from 'react';
import Game from './components/gameComponent/gameComponent'
import gameLogo from './Game-Icon.png'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
            Welcome to Tic Tac Toe in ReactJs
             {/* Edit <code>src/App.js</code> and save to reload.  */}
          </p>
          <img src={gameLogo} className="App-logo" alt="logo" />
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here to Play!
          </a> */}
        <div className="container">
        <Game />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
