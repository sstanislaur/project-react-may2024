import React from 'react';
import {useTheme} from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-switcher">
            {theme === 'light' ? '🌙 ' : '☀️ '}
        </button>
    );
};

export default ThemeSwitcher;
