import React, { FunctionComponent, useEffect } from 'react'; // importing FunctionComponent
import { Book } from './book';

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
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <span>{book.name}</span>
                    </li>
                ))}
            </ul>
        }
    </aside>
}
