import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/movies" className="navbar-link">Movies</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
