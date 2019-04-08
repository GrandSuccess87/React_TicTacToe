import React, { Component } from 'react';
// import logo from '../../logo.svg';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                <h1 className="display-4 App-intro">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            {/* <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p> */}
          </div>
        );
    }
}

export default Header;
