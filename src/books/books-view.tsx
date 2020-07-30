import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BooksViewList } from './books-view-list';
import axios from 'axios';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';
import { Book } from './book';



export const BookView: FunctionComponent = () => {

    const [booksList, setBooksList] = useState<Array<Book>>([] as Array<Book>);
    const [booksListFiltered, setBooksListFiltered] = useState<Array<Book>>([] as Array<Book>);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${API_URL}/books`
            );

            if (result.data) {
                setBooksList(result.data);
                setBooksListFiltered(result.data);
            }
        };

        fetchData();

    }, [])

    const handleChangeSearch = (event: any) => {
        //Note: in real time scenarios a bounce time should be implemented to decrease amount of hits
        const searchText = event.target.value.toLowerCase();
        let filteredBooks = booksList.filter(x => x.name.toLowerCase().includes(searchText));

        setBooksListFiltered(filteredBooks);
    }

    return <div>
        <h2>Books List</h2>
        <div className="row mt-2 mb-2 justify-content-center">
            <input className="form-control col-4 align-self-center" type="text"
                placeholder="Search by book name" aria-label="Search" onChange={handleChangeSearch} />
        </div>
        <BooksViewList books={booksListFiltered}></BooksViewList>

        <Link to="/books/new/form"><Button className="mr-2">Add New Book</Button></Link>
        <Link to="/authors"><Button>Authors List</Button></Link>
    </div>
}