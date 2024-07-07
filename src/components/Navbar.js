import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>User Data</h1>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/contacts'>Contacts</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
