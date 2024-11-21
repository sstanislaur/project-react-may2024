import React from 'react';
import {MoviesListCard} from './MoviesListCard';
import {Props} from "../types/movies";


export const MoviesList: React.FC<Props> = ({movies}) => {
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MoviesList
