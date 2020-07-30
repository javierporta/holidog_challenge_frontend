import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './books/books-view';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthorsList } from './authors/authors-view';
import { BookDetails } from './books/book-details-view';

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mt-2" alt="logo" />
        <h1>Holidog Challange - Frontend</h1>
        <small>Made with react create by Javier Portaluppi</small>
      </header>
      <div className="jumbotron App-content">
        <Router>
          <Switch>
            <Route path="/book/:id">
              <BookDetails />
            </Route>
            <Route path="/authors">
              <AuthorsList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <footer className="mt-4 mb-4">
        <small>Javier Portaluppi</small>
      </footer>
    </div>

  );
}

export default App;
