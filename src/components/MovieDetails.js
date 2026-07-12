import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          padding: "8px 15px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer"
        }}
      >
        ⬅ Back
      </button>

      <h1>{movie.title}</h1>

      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "300px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />

      <p style={{ maxWidth: "600px", margin: "0 auto 20px" }}>
        {movie.description}
      </p>

      <div style={{ marginTop: "20px" }}>
        <iframe
          width="700"
          height="400"
          src={movie.trailer}
          title="trailer"
          frameBorder="0"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDetails;