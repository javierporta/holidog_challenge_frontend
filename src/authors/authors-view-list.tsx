import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { Author } from './author';

interface AuthorProps {
    authors: Array<Author>;
}

export const AuthorsViewList: FunctionComponent<AuthorProps> = ({ authors }: { authors: Array<Author> }) => {

    return <div>
        {authors && authors.length > 0 &&
            <div className="row justify-content-center">
                <div className="col-auto">
                    <Table striped bordered hover variant="dark" className="table table-responsive">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map(author => (
                                <tr key={author._id}>
                                    <td>{author.firstName}</td>
                                    <td>{author.lastName}</td>
                                    <td>
                                        <Link to={`/authors/${author._id}/form`}>
                                            <Button className="mr-2">Edit</Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>


        }
    </div>
}
