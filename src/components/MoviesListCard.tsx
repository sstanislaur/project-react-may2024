import React from 'react';
import {Link} from 'react-router-dom';
import {PosterPreview} from './PosterPreview';
import {StarsRating} from './StarsRating';
import {Props} from "../types/movie";

export const MoviesListCard: React.FC<Props> = ({movie}) => {
    return (
        <div className="movie-card">
            <Link to={`/movies/${movie.id}`}>
                <PosterPreview posterPath={movie.poster_path}/>
            </Link>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <StarsRating rating={movie.vote_average}/>
            </div>
        </div>
    );
};
