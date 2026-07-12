import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{
        width: "260px",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        transition: "0.3s",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover"
        }}
      />

      {/* overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "10px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          color: "white"
        }}
      >
        <h3 style={{ margin: 0 }}>{movie.title}</h3>
        <p style={{ margin: 0 }}>⭐ {movie.rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;