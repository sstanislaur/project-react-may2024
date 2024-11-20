import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1><span>HD</span>Film</h1>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
