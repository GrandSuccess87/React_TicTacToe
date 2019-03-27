import React, { Component } from 'react';
import '../../App.css';

class Game extends Component {
    render() {
      return (
        <div className=" App game">
            <div className="text instructions-text">
                {/* Press the "X" or "O" key to play */}
            </div><br/>
        </div>
      );
    }
  }
  
  export default Game;