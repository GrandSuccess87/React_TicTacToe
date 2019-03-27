import React, { Component } from 'react';
import Header from './components/headerComponent/headerComponent';
import Game from './components/gameComponent/gameComponent';
import Board from './components/boardComponent/boardComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Header />
          </div>
        </div> 
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Game />
          </div>
        </div>
        <div className="row">
          <div className="board-grid col-lg-4 col-md-4 col-sm-4">
            <Board />
            <Board />
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
