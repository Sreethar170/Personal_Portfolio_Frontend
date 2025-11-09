import React, { useState } from "react";
import "./GalleryItem.css";

const GalleryItem = ({ item }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleZoom = () => {
    setIsZoomed(true);
    setAnimateOut(false);
  };

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => setIsZoomed(false), 300); // match animation duration
  };

  // Wrap image in <a> if link exists
  const ImageContent = () => (
    <img
      src={item.image}
      alt={item.title}
      className={item.link ? "clickable" : ""}
    />
  );

  return (
    <>
      <div className="gallery-item" onClick={item.link ? undefined : handleZoom}>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <ImageContent />
          </a>
        ) : (
          <ImageContent />
        )}
        <p>{item.title}</p>
      </div>

      {isZoomed && (
        <div
          className={`zoom-overlay ${animateOut ? "fade-out" : "fade-in"}`}
          onClick={handleClose}
        >
          <div className={`zoom-content ${animateOut ? "zoom-out" : "zoom-in"}`}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
