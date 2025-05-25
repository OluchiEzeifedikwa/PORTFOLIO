import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Layout = ({ children }) => {
    const { isDarkMode, toggleMode } = useContext(ThemeContext);
    
    return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}> 
            <button onClick={toggleMode}>
                {isDarkMode ? '☀️' : '🌙'}
            </button>
            {children}
            </div> 
    );
};

export default Layout;