import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BooksList } from '../books/books-list';
import axios from 'axios';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';
import { AuthorsTable } from '../authors/authors-table';


export const AuthorsList: FunctionComponent = () => {

    const [authorsList, setAuthorsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${API_URL}/authors`
            );

            if (result.data) {
                setAuthorsList(result.data);
            }
        };

        fetchData();

    }, [])

    return <div>

        <div className="row justify-content-center">
            <Link to="/home" className="float-left col-auto"><Button>Back</Button></Link>
            <h2 className="col-auto">Authors List</h2>
        </div>


        <AuthorsTable authors={authorsList}></AuthorsTable>

        <Link to="/author/test"><Button>Add New Author</Button></Link>
    </div>
}