import React from 'react';
import {Link} from 'react-router-dom';
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/movies" className="navbar-link"><strong>Movies</strong></Link>
                </li>
                <li className="navbar-item">
                    <Link to="/genres" className="navbar-link"><strong>Genres</strong></Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link"><strong>About us</strong></Link>
                </li>
            </ul>
            <ul className="navbar-list">
                <li>
                    <header className="header">
                        <Link to="/">
                            <h1><span>HD</span>Film</h1>
                        </Link>
                    </header>
                </li>
            </ul>
            <ul className="navbar-list navbar-right">
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link"><strong>Login</strong></Link>
                </li>
                <li className="navbar-item">
                    <Link to="/register" className="navbar-link"><strong><span
                        className={"vote"}>Register</span></strong></Link>
                </li>
                <li className="navbar-item">
                    <ThemeSwitcher/>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
