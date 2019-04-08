import React, { Component } from 'react';
import '../../App.css';

class Board extends Component {
    state = {
        userMove: " ",
        computerMove: " "
    };

    handleGetMove(e) {
        e.preventDefault();
        console.log('The button was successfully clicked');
        // if(this.state.userMove) {
            // set the users' input value
            let value = e.target.value;
            console.log ("users' move: " + value);
            // userMove: this.state.userMove;
            // this.setState = {
            //     userMove: value
            // }
        // }
    }

   render() {
       return (
        <div className="Board">
            <div>
                <button onClick={this.handleGetMove} type="button" className="btn btn-outline-primary">Primary</button> 
                <button onClick={this.handleGetMove} type="button" className="btn btn-outline-warning">Warning</button>
                <button onClick={this.handleGetMove} type="button" className="btn btn-outline-success">Success</button> 
            </div>
        </div>
       );
     }
}
  
  export default Board;