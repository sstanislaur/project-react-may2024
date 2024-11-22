import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1><span>HD</span>Film</h1>
            </Link>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;
