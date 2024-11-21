import React from 'react';
import {Props} from "../types/poster";

export const PosterPreview: React.FC<Props> = ({posterPath}) => {
    const imageUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return <img src={imageUrl} alt="Movie Poster" className="poster-preview"/>;
};
