import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <p>MESH</p>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                     <Link to='/project'>PROJECTS</Link>
                </li>
                <li>
                     <Link to='/contact'>CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;