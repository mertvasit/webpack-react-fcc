import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'

import buildingsImage from '../assets/a1.png'

export default function Login(){
    return(
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <Link to='/home'>
                <Button variant="contained">Enter</Button>
            </Link>
            <img src={buildingsImage} alt="buildings" />
        </div>
    )
}