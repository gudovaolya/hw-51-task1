import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Интересные фильмы</h1>
        </header>
         <div className="container">
            <div className="content" id="content"></div>
         </div>
        <footer>
          <div className="container">
            <p>&copy; Сopyright</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
