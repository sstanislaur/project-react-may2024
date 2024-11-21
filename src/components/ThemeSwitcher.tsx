import React from 'react';
import {useTheme} from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-switcher">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeSwitcher;
