import React, { useState } from "react";

const movieData = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "The Dark Knight" },
  { id: 4, title: "Avengers" }
];

function MovieApp() {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (movie) => {
    if (favourites.find((fav) => fav.id === movie.id)) {
      setFavourites(favourites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavourites([...favourites, movie]);
    }
  };

  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Movie Explorer</h2>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch("")}>Reset</button>

      {search === "" ? (
        <p>Start typing to search movies</p>
      ) : filteredMovies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div>
          {filteredMovies.map((movie) => (
            <div key={movie.id} style={{ margin: 10 }}>
              <span>{movie.title}</span>
              <button onClick={() => toggleFavourite(movie)}>
                {favourites.find((fav) => fav.id === movie.id)
                  ? "Unfavourite"
                  : "Favourite"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Favourite Movies Section */}
      <h3>Favourite Movies</h3>
      {favourites.length === 0 ? (
        <p>No favourites yet</p>
      ) : (
        favourites.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))
      )}
    </div>
  );
}

export default MovieApp;
