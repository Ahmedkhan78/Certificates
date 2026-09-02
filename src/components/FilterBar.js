import React from "react";

const FilterBar = ({ title, items, selectedItem, setSelectedItem }) => {
  const electricColor = "#7df9ff";

  const buttonStyle = (isActive) => ({
    margin: "0.25rem",
    padding: "0.5rem 1rem",
    backgroundColor: isActive ? electricColor : "#1e1e1e",
    color: isActive ? "#000" : "#fff",
    border: `2px solid ${electricColor}`,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "500",
    minWidth: "80px",
    textAlign: "center",
  });

  return (
    <div
      style={{
        marginBottom: "1rem",
      }}
    >
      {/* Filter title */}
      <div
        style={{
          textAlign: "center",
          color: "#7df9ff",
          fontSize: "0.9rem",
          marginBottom: "0.4rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <button
          onClick={() => setSelectedItem("All")}
          style={buttonStyle(selectedItem === "All")}
        >
          All
        </button>

        {items.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedItem(item)}
            style={buttonStyle(selectedItem === item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
