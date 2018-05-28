import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import Nav from './component/nav';

const LIST = [{text: 'Home', url: '/home'}, {text: 'Encode', url: '/encode'}, {text: 'Decode', url: '/decode'}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Xiaoxiao Viewer</h1>
        </header>
        <div className="nav_bar">
          <Nav list={LIST} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
