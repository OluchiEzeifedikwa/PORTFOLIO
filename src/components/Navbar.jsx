import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // }
    return (
        <nav className='navbar'>
            {/* <button onClick={toggle}>
                {isOn ? 'ON' : 'OFF'}
            </button> */}

            {/* <button onClick={toggleMode}>
                {isDarkMode ? (
                    <i className='fas fa-sun'></i>) : ()
                )} */}

            {/* </button> */}
            <button onClick={toggleTheme}>
              {theme ==='light' ? '🌙 ' : '☀️'} 
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
    );
};

export default Navbar;