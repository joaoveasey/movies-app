import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PopularMovies from './popular-movies/popularMovies';
import TopRatedMovies from './top-rated-movies/topRatedMovies';
import Home from './home/home';
import './App.css';

const App = () => {
    const [isLogoOpen, setIsLogoOpen] = useState(false);
    const [busca, setBusca] = useState('');

    const toggleLogo = () => {
        setIsLogoOpen((prev) => !prev);
    };

    return (
        <Router>
            <nav className="navbar">
                <div className={`logo-container ${isLogoOpen ? 'open' : ''}`} onClick={toggleLogo}>
                    <span className="logo">🎥 Movies</span>
                </div>
                <ul className={`menu ${isLogoOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/popular-movies" onClick={toggleLogo}>Popular Movies</Link>
                    </li>
                    <li>
                        <Link to="/top-rated" onClick={toggleLogo}>Most Rated Movies</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/popular-movies" element={<PopularMovies />} />
                <Route path="/top-rated" element={<TopRatedMovies />} />
            </Routes>
        </Router>
    );
};

export default App;
