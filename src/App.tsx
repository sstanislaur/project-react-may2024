import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesPage from './pages/MoviesPage';
import AboutPage from './pages/AboutPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Header from './components/Header';
import {ThemeProvider} from './context/ThemeContext';
import GenrePage from "./pages/GenrePage";
import MovieByGenrePage from "./pages/MovieByGenrePage";
import './styles/styles.scss';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Header/>
                <NavBar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MoviesPage/>}/>
                        <Route path="/movies" element={<MoviesPage/>}/>
                        <Route path="/genres" element={<GenrePage/>}/>
                        <Route path="/movies/genre/:genreId" element={<MovieByGenrePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/movies/:id" element={<MovieDetailsPage/>}/>

                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
