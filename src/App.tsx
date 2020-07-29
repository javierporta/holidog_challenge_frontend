import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './home/home';

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mt-2" alt="logo" />
        <h1>Holidog Challange - Frontend</h1>
        <small>Made with react create by Javier Portaluppi</small>
      </header>
      <Home />
    </div>
  );
}

export default App;
