import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { API_URL } from '../api';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Book } from './book';
import { Author } from '../authors/author';



export const BookForm: FunctionComponent = () => {

    const [book, setBook] = useState<Book>({ name: '', isbn: '', authorId: '' } as Book);
    const [authors, setAuthors] = useState<Author[]>([]);
    const [currentAuthorId, setCurrentAuthorId] = useState<string>('');
    const [isEditing, setIsEditing] = useState(false);
    let history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(
                `${API_URL}/books/${id}`
            );

            if (result.data) {
                setBook(result.data);
                if (result.data.author && result.data.author[0] && result.data.author[0]._id) {
                    setCurrentAuthorId(result.data.author[0]._id); //we are only showing first author
                }

            }
        };

        const getAuthors = async () => {
            const result = await axios(
                `${API_URL}/authors/`
            );

            if (result.data) {
                setAuthors(result.data);
            }
        };


        if (id !== "new") {
            setIsEditing(true);
            fetchData();
        }
        getAuthors();

    }, [])



    const handleClickSave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        // update current author selection
        let bookForm = { ...book, authorId: currentAuthorId };

        if (isEditing) {
            //Edit current book -> PUT
            updateBook(bookForm)
        } else {
            //Add new book -> POST
            addNewBook(bookForm);
        }


    };

    const updateBook = (bookToUpdate: Book) => {
        axios.put(`${API_URL}/books/${bookToUpdate._id}`, bookToUpdate)
            .then(function (response) {
                console.log(response);

                alert('Updated');

                //redirect after success
                history.push('/books');
            })
            .catch(function (error) {
                console.log(error);
                alert('Error updating');
            });
    }

    const addNewBook = (newBook: Book,) => {
        axios.post(`${API_URL}/books`, newBook)
            .then(function (response) {
                console.log(response);

                alert('Saved');
                //redirect after success
                history.push('/');
            })
            .catch(function (error) {
                console.log(error);
                alert('Error saving');
            });
    }

    const handleFormChange = (event: any, prop: string) => {
        setBook({ ...book, [prop]: event.target.value });
    }

    const handleSelectChange = (event: any) => {
        setCurrentAuthorId(event.target.value);
    }


    return <div>
        <div style={{ width: '40rem' }} className="mx-auto">
            <Link to="/" className="float-left mr-2"><Button>Back</Button></Link>
            <h2>Book Form</h2>
        </div>

        <Card bg={"dark"} style={{ width: '40rem' }} className="mx-auto p-4">

            <form >
                <div>
                    <strong>Book</strong>
                    <div className="form-group">
                        <label htmlFor={"bookNameId"} className="font-weight-bold">Name</label>
                        <input type="text" className="form-control" id="bookNameId" placeholder="Name" value={book.name} onChange={(e) => handleFormChange(e, 'name')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookIsbnId" className="font-weight-bold">ISBN</label>
                        <input type="text" className="form-control" id="bookIsbnId" placeholder="ISBN" value={book.isbn} onChange={(e) => handleFormChange(e, 'isbn')} />
                    </div>

                    <strong>Author</strong>
                    <Form.Group controlId="authorSelectId">
                        <Form.Label>Select an author</Form.Label>
                        <Form.Control as="select" value={currentAuthorId} onChange={(e) => handleSelectChange(e)} >
                            <option value="" selected disabled hidden>Choose here</option>
                            {
                                authors.map((author) =>
                                    <option key={author._id} value={author._id}>{author.lastName}, {author.firstName}</option>)
                            }

                        </Form.Control>
                    </Form.Group>
                </div>

                <Button onClick={event => handleClickSave(event)}>Save</Button>
            </form>

        </Card>


    </div >
}