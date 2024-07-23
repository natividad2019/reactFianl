import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard"; // Ensure this path is correct

export default function Watchlist({ watchlist, movies, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {
          watchlist.map(id => {
            const movie = movies.find(movie => movie.id === id);
            return (
              movie && (
                <MovieCard
                  key={id}
                  movie={movie}
                  isWatchlisted={true}
                  toggleWatchlist={toggleWatchlist}
                />
              )
            );
          })
        }
      </div>
    </div>
  );
}
