import React from "react";

const FilterBar = ({ platforms, selectedPlatform, setSelectedPlatform }) => {
  const electricColor = "#7df9ff"; // electric border theme color

  const buttonStyle = (isActive) => ({
    margin: "0.25rem", // small margin for wrapping
    padding: "0.5rem 1rem",
    backgroundColor: isActive ? electricColor : "#1e1e1e",
    color: isActive ? "#000" : "#fff",
    border: `2px solid ${electricColor}`,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "500",
    flex: "1 1 auto", // allows buttons to shrink & grow
    minWidth: "80px", // minimum width for small screens
    textAlign: "center",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "2rem",
        gap: "0.5rem",
      }}
    >
      {platforms.map((platform) => (
        <button
          key={platform}
          onClick={() => setSelectedPlatform(platform)}
          style={buttonStyle(selectedPlatform === platform)}
        >
          {platform}
        </button>
      ))}
      <button
        onClick={() => setSelectedPlatform("All")}
        style={buttonStyle(selectedPlatform === "All")}
      >
        All
      </button>
    </div>
  );
};

export default FilterBar;
