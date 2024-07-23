import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist(prev =>
      prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    )
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<MoviesGrid  watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist}/>} />
            <Route path="/watchlist" element={<Watchlist  watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

