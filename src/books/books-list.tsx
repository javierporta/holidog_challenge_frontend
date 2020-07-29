import React, { FunctionComponent, useEffect } from 'react'; // importing FunctionComponent
import { Book } from './book';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

interface BookProps {
    books: Array<Book>;
}

export const BooksList: FunctionComponent<BookProps> = ({ books }: { books: Array<Book> }) => {

    useEffect(() => {
        console.log('rendered');
        console.log(books);
    });

    return <aside>
        {books && books.length > 0 &&
            <div className="row justify-content-center">
                <div className="col-auto">
                    <Table striped bordered hover variant="dark" className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book._id}>
                                    <td>{book.name}</td>
                                    <td><Button>View</Button></td>
                                    <td><Button>Edit</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>


        }
    </aside>
}
