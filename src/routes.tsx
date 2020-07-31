import React, { FunctionComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthorsView } from './authors/authors-view';
import { BookDetailsView } from './books/book-details-view';
import { AuthorForm } from './authors/author-form';
import { BookForm } from './books/book-form';
import { BookView } from './books/books-view';


export const Routes: FunctionComponent = () => {
    return (
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
    );
}
