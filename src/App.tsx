import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './routes/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BookDetails } from './routes/book-details';

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mt-2" alt="logo" />
        <h1>Holidog Challange - Frontend</h1>
        <small>Made with react create by Javier Portaluppi</small>
      </header>
      <Router>
        <Switch>
          <Route path="/book/:id">
            <BookDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <footer className="mt-4 mb-4">
        <small>Javier Portaluppi</small>
      </footer>
    </div>

  );
}

export default App;
