import React from "react";

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`filter-button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
