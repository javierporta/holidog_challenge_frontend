import React, { FunctionComponent } from 'react'; // importing FunctionComponent

import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';



export const NotFound: FunctionComponent = () => {

    return <div className="center">
        <h2>Oops!</h2>
        <h3>There was some issue =(</h3>

        <Link to="/home" className="mr-2"><Button>Home</Button></Link>
    </div>
}
