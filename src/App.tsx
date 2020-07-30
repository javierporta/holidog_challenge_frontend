import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BookView } from './books/books-view';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthorsView } from './authors/authors-view';
import { BookDetailsView } from './books/book-details-view';
import { AuthorForm } from './authors/author-form';
import { BookForm } from './books/book-form';

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
            <Route exact path="/books/:id">
              <BookDetailsView />
            </Route>
            <Route path="/books/:id/form">
              <BookForm />
            </Route>
            <Route exact path="/authors">
              <AuthorsView />
            </Route>
            <Route path="/authors/:id/form">
              <AuthorForm />
            </Route>
            <Route path="/">
              <BookView />
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
