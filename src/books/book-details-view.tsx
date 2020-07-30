import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { API_URL } from '../api';
import { Link, useParams } from 'react-router-dom';
import { Book } from '../books/book';
import { NotFound } from '../not-found';



export const BookDetailsView: FunctionComponent = () => {

    const [bookDetails, setBookDetails] = useState<Book>({} as Book);
    const [wasLoaded, setWasLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    `${API_URL}/books/${id}`
                );
                if (result.data) {
                    setBookDetails(result.data);
                    setHasError(false)
                }
            } catch (error) {
                setHasError(true)
            } finally {
                setWasLoaded(true)
            }


        };

        fetchData();

    }, [])

    return <div>
        <div style={{ width: '40rem' }} className="mx-auto">
            <Link to="/" className="float-left mr-2"><Button>Back</Button></Link>
            <h2>Book Details</h2>
        </div>
        {wasLoaded && !hasError &&
            <Card bg={"dark"} style={{ width: '40rem' }} className="mx-auto p-4">
                {bookDetails && bookDetails._id &&
                    <div>

                        <div className="form-group">
                            <Card.Header as="h5">Name: {bookDetails.name}</Card.Header>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold mr-1">ISBN:</label>
                            <label>{bookDetails.isbn}</label>
                        </div>

                        {bookDetails.author[0] &&
                            <div>
                                <strong>Author</strong>
                                <div className="form-group">
                                    <label className="font-weight-bold mr-1">First Name:</label>
                                    <label>{bookDetails.author[0].firstName}</label>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold mr-1">Last Name:</label>
                                    <label>{bookDetails.author[0].lastName}</label>
                                </div>

                            </div>
                        }

                    </div>
                }
            </Card>
        }
        {
            wasLoaded && hasError &&
            <NotFound></NotFound>
        }

    </div >
}