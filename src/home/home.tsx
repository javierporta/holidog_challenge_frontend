import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import Button from 'react-bootstrap/Button';

export const Home: FunctionComponent = () => <aside>
    <h2>Books List</h2>

    <Button className="mr-2">Add new book</Button>
    <Button>Add new author</Button>
</aside>