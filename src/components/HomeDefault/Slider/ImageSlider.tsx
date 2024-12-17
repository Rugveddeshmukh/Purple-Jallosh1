"use client";
import React, { useState, useEffect } from "react";

// Define the image paths relative to the public folder
const images = [
  "/images/image4.jpg", // Path relative to the public folder
  "/images/image4.jpg", // Path relative to the public folder
  "/images/image4.jpg", // Path relative to the public folder
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3 seconds

    // Clean up interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Function to handle manual slide change
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="slider-container"
      style={{
        position: "relative",
        width: "100%", // Full width of the container
        maxWidth: "700px", // Max width of the container
        height: "400px", // Fixed height for the slider
        margin: "0 auto", // Center the slider
        overflow: "hidden", // Hide overflowing content
      }}
    >
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "100%", // Make the image fill the container width
          height: "100%", // Ensure the image takes full height of the container
          objectFit: "cover", // Ensure the image covers the container without distortion
          borderRadius: "8px",
        }}
      />
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
