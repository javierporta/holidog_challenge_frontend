import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BooksList } from '../books/books-list';
import axios from 'axios';
import { API_URL } from '../api';



export const Home: FunctionComponent = () => {

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

    return <aside>
        <h2>Books List</h2>

        <BooksList books={booksList}></BooksList>


        <Button className="mr-2">Add new book</Button>
        <Button>Add new author</Button>
    </aside>
}