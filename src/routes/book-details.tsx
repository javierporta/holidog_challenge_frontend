import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL } from '../api';
import { Link, useParams } from 'react-router-dom';
import { Book } from '../books/book';
import { NotFound } from '../not-found';



export const BookDetails: FunctionComponent = () => {

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
                console.log(result);
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
        <h2>Book Details</h2>
        {wasLoaded && !hasError &&
            <div>
                {bookDetails && bookDetails._id &&
                    <div>
                        <form>
                            {bookDetails.name}
                        </form>

                        <Link to="/home" className="mr-2"><Button>Back</Button></Link>
                        <Button>Save</Button>
                    </div>
                }
            </div>
        }
        {wasLoaded && hasError &&
            <NotFound></NotFound>
        }

    </div >
}