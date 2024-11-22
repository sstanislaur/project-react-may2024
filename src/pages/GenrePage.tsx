import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Genre} from "../types/movie";

const GenrePage: React.FC = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenres = async () => {
            const apiKey = "cdc6f85037cb25eaeb738d4d76c6c395";
            const url = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch genres");
                }

                const data = await response.json();
                setGenres(data.genres || []);
            } catch (error) {
                console.error("Error fetching genres:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    const handleGenreClick = (genreId: number) => {
        navigate(`/movies/genre/${genreId}`);
    };

    return (
        <div className="genre-page">
            <h1>Genres</h1>
            {loading ? (
                <p>Loading...</p>
            ) : genres.length > 0 ? (
                <div className="genres-list">
                    {genres.map((genre) => (
                        <div
                            key={genre.id}
                            className="genre-item"
                            onClick={() => handleGenreClick(genre.id)}
                        >
                            <h3>{genre.name}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No genres available</p>
            )}
        </div>
    );
};

export default GenrePage;
