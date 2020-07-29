import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';



export const BookDetails: FunctionComponent = () => {

    const [bookDetails, setBookDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${API_URL}/books/id`
            );

            if (result.data) {
                setBookDetails(result.data);
            }
        };

        fetchData();

    }, [])

    return <div>
        <h2>Book Details</h2>

        <form>
            Data is places here
        </form>

        <Link to="/home" className="mr-2"><Button>Back</Button></Link>
        <Button>Save</Button>


    </div>
}