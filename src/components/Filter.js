import React from "react";

function Filter({ setTitle, setRating }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px"
      }}
    >
      <input
        placeholder="Search title..."
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          width: "200px"
        }}
      />

      <input
        type="number"
        placeholder="Min ⭐"
        onChange={(e) => setRating(Number(e.target.value))}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          width: "120px"
        }}
      />
    </div>
  );
}

export default Filter;