import React from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ isDarkMode, toggleTheme }) {
    return(
        <button onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default ThemeToggle;