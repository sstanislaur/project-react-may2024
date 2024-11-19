import React from 'react';
import { Movie } from '../types/movie';
import { MoviesListCard } from './MoviesListCard';

interface Props {
    movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => {
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
