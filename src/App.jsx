import React, { useState } from "react";
import "./App.css";

const mockMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    plot:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster:
      "https://artofthemovies.co.uk/cdn/shop/files/IMG_0402_8a4ee439-15c9-4b0d-b68f-237e984e5e59_1200x1200.jpg?v=1706799949",
    plot:
      "When the menace known as the Joker wreaks havoc, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 4,
    title: "Avatar",
    year: 2009,
    poster: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
    plot:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting the world he feels is his home.",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(mockMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = mockMovies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(result);
  };

  return (
    <div className="app-container">
      <h1 className="title">🎬 Movie Explorer</h1>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>({movie.year})</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details" onClick={() => setSelectedMovie(null)}>
          <div className="movie-info" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              className="poster"
            />
            <div>
              <h2>{selectedMovie.title}</h2>
              <p><strong>Year:</strong> {selectedMovie.year}</p>
              <p>{selectedMovie.plot}</p>
              <button onClick={() => setSelectedMovie(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
