import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Blocks } from 'react-loader-spinner';
import "./topRatedMovies.css"

const TopRatedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

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

    if (loading) {
    return (
        <div className='loading'>
            <Blocks
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            visible={true}
            />
        </div>
        );
    }

    const filteredMovies = movies.filter((movie) => 
        movie.title.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div className='App'>
            <h1>Most Rated Movies</h1>
            <div className="search-container">
      <div className="search-box">
        <i className="search-icon">🔍</i>
        <input
          type="text"
          placeholder="Search for movies..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        </div>
      </div>
            <div className="movies-grid">
                {filteredMovies.map((movie) => (
                    <div 
                        key={movie.id} 
                        className="movie-card"
                        onClick={() => setSelectedMovie(movie)}
                    >
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

            {/* Modal com detalhes do filme */}
            {selectedMovie && (
                <div className="movie-details">
                <h2>{selectedMovie.title}</h2>
                <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>
                <p><strong>Rating:</strong> {selectedMovie.vote_average}</p>
                <p><strong>Overview:</strong> {selectedMovie.overview}</p>
                <button onClick={() => setSelectedMovie(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default TopRatedMovies;
