import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesPage from './pages/MoviesPage';
import AboutPage from './pages/AboutPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './styles/styles.scss';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Header />
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MoviesPage />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/movies/:id" element={<MovieDetailsPage />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
