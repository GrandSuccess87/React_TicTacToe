import React, { Component } from 'react';
import Board from '../boardComponent/boardComponent';
import '../../App.css';

class Game extends Component {
    render() {
      return (
        <div className=" App game">
            <div className="text instructions-text">
            <div className="row">
          <div className="board-grid col-lg-12 col-md-12 col-sm-12">
            <Board />
            <Board />
            <Board />
          </div>
        </div>
            </div>
        </div>
      );
    }
  }
  
  export default Game;