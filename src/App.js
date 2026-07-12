import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetails from "./components/MovieDetails";

// local images
import inception from "./assets/inception.jpg";
import breakingbad from "./assets/breakingbad.jpeg";
import interstellar from "./assets/interstellar.jpg";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending movie about dreams.",
      posterURL: inception,
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Breaking Bad",
      description: "A chemistry teacher becomes a drug lord.",
      posterURL: breakingbad,
      rating: 5,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL: interstellar,
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      m.rating >= ratingFilter
  );

  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                background:
                  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                padding: "30px",
                color: "white",
                textAlign: "center"
              }}
            >
              <h1 style={{ marginBottom: "20px" }}>🎬 Movie App</h1>

              <Filter
                setTitle={setTitleFilter}
                setRating={setRatingFilter}
              />

              <MovieList movies={filteredMovies} />
            </div>
          }
        />

        {/* DETAILS PAGE */}
        <Route
          path="/movie/:id"
          element={<MovieDetails movies={movies} />}
        />

      </Routes>
    </Router>
  );
}

export default App;