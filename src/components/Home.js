import React from 'react';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'; 


export default function Home(params) {
    return(
        <div>
            <h1>Home</h1>
            <Link to='/'>
                <Button variant="contained">Back</Button>
            </Link>
        </div>
    )
}