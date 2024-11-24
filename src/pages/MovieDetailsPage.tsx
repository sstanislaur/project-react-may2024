import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {Movie} from "../types/movie";

export const MovieDetailsPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const {data: movie, loading} = useFetch<Movie>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="movie-details">
            <h1 className="movie-title">{movie.title}</h1>
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
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
                    <Link
                        key={genre.id}
                        to={`/movies/genre/${genre.id}`}
                        className="genre-badge">
                        {genre.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieDetailsPage;
