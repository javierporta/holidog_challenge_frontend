import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes } from './routes';


function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mt-2" alt="logo" />
        <h1>Holidog Challange - Frontend</h1>
        <small>Made with <i>create-react-app</i> by <strong>Javier Portaluppi</strong> <span>&#9996;</span></small>
      </header>
      <div className="jumbotron App-content">
        <Routes></Routes>
      </div>
      <footer className="mt-4 mb-4">
        <small>
          <a className="text-white" href="mailto:javierporta@hotmail.com"><span>&#9993;</span> Javier Portaluppi</a>
        </small>
        <div>
          <a className="text-white" target="_blank" href="https://github.com/javierporta" rel="noopener noreferrer"><span>&#x1F4BB;</span> Github
          </a>
        </div>
      </footer>
    </div>

  );
}

export default App;
