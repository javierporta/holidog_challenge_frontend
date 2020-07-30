import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BooksViewList } from './books-view-list';
import axios from 'axios';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';



export const BookView: FunctionComponent = () => {

    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${API_URL}/books`
            );

            if (result.data) {
                setBooksList(result.data);
            }
        };

        fetchData();

    }, [])

    return <div>
        <h2>Books List</h2>

        <BooksViewList books={booksList}></BooksViewList>


        <Link to="/books/new/form"><Button className="mr-2">Add new book</Button></Link>
        <Link to="/authors"><Button>Authors List</Button></Link>
    </div>
}