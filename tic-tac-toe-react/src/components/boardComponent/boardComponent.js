import React, { Component } from 'react';
import '../../App.css';

class Board extends Component {
    handleButtonClick(e) {
        e.preventDefault();
        console.log('The button was successfully clicked');
    }

   render() {
       return (
        <div className="Board">
            <div>
                <button onClick={this.handleButtonClick} type="button" className="btn btn-outline-primary">Primary</button> 
                <button onClick={this.handleButtonClick} type="button" className="btn btn-outline-warning">Warning</button>
                <button onClick={this.handleButtonClick} type="button" className="btn btn-outline-success">Success</button> 
            </div>
        </div>
       );
     }
}
  
  export default Board;