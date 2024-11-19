import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>FilmTracker</h1>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
