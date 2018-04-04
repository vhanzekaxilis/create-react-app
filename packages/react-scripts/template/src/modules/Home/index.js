import React, { Component } from 'react';

import logo from '../../images/logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/module/Home/index.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

export default Home;
