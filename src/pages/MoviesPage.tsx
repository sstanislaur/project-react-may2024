import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const MoviesPage = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]); // Для жанрів
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<any[]>([]); // Для підказок
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const navigate = useNavigate();

    const apiKey = 'cdc6f85037cb25eaeb738d4d76c6c395';

    const fetchGenres = async () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch genres');
            }
            const data = await response.json();
            setGenres(data.genres || []);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    const fetchMovies = useCallback(async (page: number, query: string = '') => {
        setLoading(true);
        const fetchUrl = query
            ? `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=${page}&query=${encodeURIComponent(query)}&api_key=${apiKey}`
            : `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&sort_by=popularity.desc&page=${page}&api_key=${apiKey}`;

        try {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();
            if (data && Array.isArray(data.results)) {
                setMovies(data.results);
            } else {
                setMovies([]);
            }

            if (data && typeof data.total_pages === 'number') {
                setTotalPages(data.total_pages);
            } else {
                setTotalPages(0);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]);
            setTotalPages(0);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchSuggestions = async (query: string) => {
        if (query.trim() === '') {
            setSuggestions([]);
            return;
        }

        const fetchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(query)}&api_key=${apiKey}`;
        try {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch suggestions');
            }

            const data = await response.json();
            if (data && Array.isArray(data.results)) {
                setSuggestions(data.results.slice(0, 5));
            } else {
                setSuggestions([]);
            }
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        setCurrentPage(1);
        fetchMovies(1, suggestion);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setShowSuggestions(true);
        fetchSuggestions(query);

        if (query.trim() === '') {
            fetchMovies(1);
        } else {
            fetchMovies(1, query);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating / 2);
        const emptyStars = 5 - fullStars;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={i + fullStars} className="star empty">★</span>);
        }

        return stars;
    };

    useEffect(() => {
        fetchMovies(currentPage, searchQuery);
    }, [currentPage, searchQuery]);

    const getYear = (date: string) => {
        return date ? date.split('-')[0] : "N/A";
    };


    const renderGenres = (genreIds: number[]) => {
        return genreIds
            .map(id => genres.find(genre => genre.id === id)?.name)
            .filter(Boolean)
            .join(", ");
    };

    return (
        <div className="movies-page">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for movies...🔍"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />

                {showSuggestions && suggestions.length > 0 && (
                    <div className="suggestions">
                        {suggestions.map((suggestion) => (
                            <div
                                key={suggestion.id}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(suggestion.title)}
                            >
                                {suggestion.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="movies-list">
                        {movies.length === 0 ? (
                            <p>No movies found</p>
                        ) : (
                            movies.map((movie) => (
                                <div key={movie.id} className="movie-card"
                                     onClick={() => navigate(`/movies/${movie.id}`)}>
                                    {movie.poster_path && (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title}
                                            className="movie-poster"
                                        />
                                    )}
                                    <h3>{movie.title}</h3>
                                    <div className="movie-rating">{renderStars(movie.vote_average)}</div>
                                    <p className={"fool"}>{getYear(movie.release_date)}, {renderGenres(movie.genre_ids)}</p>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="pagination">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MoviesPage;
