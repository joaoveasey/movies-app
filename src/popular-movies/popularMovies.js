import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popularMovies.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1); // Página atual
  const [totalPages, setTotalPages] = useState(1); // Total de páginas

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (currentPage) => {
    try {
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages); // Atualiza o total de páginas
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
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
