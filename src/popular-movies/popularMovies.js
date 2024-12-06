import React, { useEffect, useState } from "react";
import axios from "axios";
import { Blocks } from 'react-loader-spinner';
import "./popularMovies.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1); // Página atual
  const [totalPages, setTotalPages] = useState(1); // Total de páginas

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (currentPage) => {
    try {
      setLoading(true);
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages); // Atualiza o total de páginas
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

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
    <div className="App">
      <h1>Popular Movies</h1>
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
          </div>
        ))}
      </div>

      {/* Navegação por páginas */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
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

export default App;
