import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Movie } from "../types/movie";

const genreColors: { [key: string]: string } = {
    "Action": "#FF5733",
    "Adventure": "#33FF57",
    "Animation": "#FFD700",
    "Comedy": "#F0E68C",
    "Crime": "#8B0000",
    "Documentary": "#20B2AA",
    "Drama": "#9932CC",
    "Family": "#FF6347",
    "Fantasy": "#8A2BE2",
    "History": "#D2691E",
    "Horror": "#FF33A1",
    "Music": "#1E90FF",
    "Mystery": "#4B0082",
    "Romance": "#FFB6C1",
    "Science Fiction": "#00FFFF",
    "TV Movie": "#2E8B57",
    "Thriller": "#DC143C",
    "War": "#808080",
    "Western": "#B8860B"
};


export const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: movie, loading } = useFetch<Movie>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="movie-details">
            <h1 className="movie-title">{movie.title}</h1>
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <p><strong>Language:</strong> {movie.original_language}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                <p><strong>Vote Count:</strong> {movie.vote_count}</p>
            </div>
            <div className="genre-badges">
                <strong>Genres:</strong>
                {movie.genres.map((genre: any) => (
                    <span
                        key={genre.id}
                        className="genre-badge"
                        style={{ backgroundColor: genreColors[genre.name] || "#ccc" }} // Використовуємо колір для жанра
                    >
                        {genre.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MovieDetailsPage;
