import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link"><strong>Home</strong></Link>
                </li>
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
        </nav>
    );
};

export default NavBar;
