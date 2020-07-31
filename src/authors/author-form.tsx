import React, { FunctionComponent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { API_URL } from '../api';
import { Link, useParams } from 'react-router-dom';
import { Author } from './author';
import { useHistory } from "react-router-dom";



export const AuthorForm: FunctionComponent = () => {

    const [author, setAuthor] = useState<Author>({ firstName: '', lastName: '' } as Author);
    const [isEditing, setIsEditing] = useState(false);
    let history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(
                `${API_URL}/authors/${id}`
            );

            if (result.data) {
                setAuthor(result.data)
            }

        };

        if (id !== "new") {
            setIsEditing(true);
            fetchData();
        }

    }, [id])



    const handleClickSave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (isEditing) {
            //Edit current author -> PUT
            updateAuthor(author)
        } else {
            //Add new author -> POST
            addNewAuthor(author);
        }


    };

    const updateAuthor = (authorToUpdate: Author) => {
        axios.put(`${API_URL}/authors/${authorToUpdate._id}`, authorToUpdate)
            .then(function (response) {

                alert('Updated');

                //redirect after success
                history.push('/authors');
            })
            .catch(function (error) {
                console.error(error);
                alert('Error updating');
            });
    }

    const addNewAuthor = (newAuthor: Author) => {
        axios.post(`${API_URL}/authors`, newAuthor)
            .then(function (response) {

                alert('Saved');
                //redirect after success
                history.push('/authors');
            })
            .catch(function (error) {
                console.error(error);
                alert('Error saving');
            });
    }

    const handleFormChange = (event: any, prop: string) => {
        setAuthor({ ...author, [prop]: event.target.value });
    }



    return <div>
        <div style={{ width: '40rem' }} className="mx-auto">
            <Link to="/authors" className="float-left mr-2"><Button>Back</Button></Link>
            <h2>Author Form</h2>
        </div>

        <Card bg={"dark"} style={{ width: '40rem' }} className="mx-auto p-4">

            <form >
                <div>
                    <strong>Author</strong>
                    <div className="form-group">
                        <label htmlFor={"authorFirstNameId"} className="font-weight-bold">First Name</label>
                        <input type="text" className="form-control" id="authorFirstNameId" placeholder="First Name" value={author.firstName} onChange={(e) => handleFormChange(e, 'firstName')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="authorLastNameId" className="font-weight-bold">Last Name</label>
                        <input type="text" className="form-control" id="authorLastNameId" placeholder="Last Name" value={author.lastName} onChange={(e) => handleFormChange(e, 'lastName')} />
                    </div>
                </div>

                <Button onClick={event => handleClickSave(event)}>Save</Button>
            </form>

        </Card>


    </div >
}