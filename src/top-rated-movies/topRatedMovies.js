import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./topRatedMovies.css"

const TopRatedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
                    params: {
                        api_key: API_KEY,
                        language: 'en-US',
                        page: currentPage,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar filmes mais bem avaliados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopRatedMovies();
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage((prev) => prev + 1);
    const handlePrevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

    if (loading) return <p>Loading...</p>;

    return (
        <div className='App'>
            <h1>Most Rated Movies</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                        <p>Grade: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
};

export default TopRatedMovies;
