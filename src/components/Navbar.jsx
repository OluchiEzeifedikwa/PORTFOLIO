import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div className={theme}>
        <nav className='navbar'>
            
            <button onClick={toggleTheme}>
              <p className='switch'>{theme ==='light' ? ' 🌓 ' : '🔆'} </p>
            </button>
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
        </div> 
    );
};

export default Navbar;