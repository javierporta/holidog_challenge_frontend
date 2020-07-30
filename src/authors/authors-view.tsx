import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';
import { AuthorsViewList } from './authors-view-list';


export const AuthorsView: FunctionComponent = () => {

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
            <Link to="/" className="float-left col-auto"><Button>Back</Button></Link>
            <h2 className="col-auto">Authors List</h2>
        </div>

        <AuthorsViewList authors={authorsList}></AuthorsViewList>

        <Link to="/authors/new/form"><Button>Add New Author</Button></Link>
    </div>
}