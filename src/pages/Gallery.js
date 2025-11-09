import React, { useState, useEffect } from "react";
import GalleryItem from "../components/GalleryItem";
import "./Gallery.css";
import data from "./galleryData";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Step 1: Clear old images first
    setFilteredData([]);

    // Step 2: After a short delay, set new images
    const timeout = setTimeout(() => {
      const filtered = [...data]
        .filter((item) => filter === "All" || item.category === filter)
        .sort((a, b) => a.id - b.id);
      setFilteredData(filtered);
    }, 100); // 100ms gives smooth clearing before loading new items

    // Cleanup on unmount or next filter change
    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    
    <div className="gallery-container" id="Gallery">
      <h1 className="gallery-title">Gallery</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Photos", "Certificate", "Projects", "Internship", "Courses"].map((btn) => (
          <button
            key={btn}
            className={filter === btn ? "active" : ""}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))
        ) : (
          <p className="no-images">Loading images for "{filter}"...</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
