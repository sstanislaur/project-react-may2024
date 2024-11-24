import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Genre} from "../types/movie";

const GenrePage: React.FC = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();


    const genreImages: { [key: string]: string } = {
        Action: "/images/action.jpg",
        Adventure: "/images/adventure.jpg",
        Animation: "/images/animation.jpg",
        Comedy: "/images/comedy.jpg",
        Crime: "/images/crime.jpg",
        Documentary: "/images/documentary.jpg",
        Drama: "/images/drama.jpg",
        Family: "/images/family.jpg",
        Fantasy: "/images/fantasy.jpg",
        History: "/images/history.jpg",
        Horror: "/images/horror.jpg",
        Music: "/images/music.jpg",
        Mystery: "/images/mystery.jpg",
        Romance: "/images/romance.jpg",
        "Science Fiction": "/images/scifi.jpg",
        "TV Movie": "/images/tvmovie.jpg",
        Thriller: "/images/thriller.jpg",
        War: "/images/war.jpg",
        Western: "/images/western.jpg",
    };

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
            {loading ? (
                <p>Loading...</p>
            ) : genres.length > 0 ? (
                <div className="genres-list">
                    {genres.map((genre) => (
                        <div
                            key={genre.id}
                            className="genre-item"
                            style={{
                                backgroundImage: `url(${
                                    genreImages[genre.name] || "/images/default.jpg"
                                })`,
                            }}
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
