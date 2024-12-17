"use client";

import React, { useState } from 'react';
import './PricingTableTwo.css';

const StallGrid: React.FC = () => {
  // State to track form visibility and selected stall number
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedStall, setSelectedStall] = useState<number | null>(null);

  // Function to handle stall click
  const handleStallClick = (stallNumber: number) => {
    setSelectedStall(stallNumber); // Set the clicked stall number
    setIsFormVisible(true); // Show the form
  };

  // Function to close the form
  const handleCloseForm = () => {
    setIsFormVisible(false);
    setSelectedStall(null);
  };

  return (
    <>
    <h1 style={{ textAlign: "center", color: "#000" }}>Stall Booking Hall B </h1>
    <div className="grid-container">
      {/* Top Row */}
      <div className="top-row">
        {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
          <button className="stall" key={num} onClick={() => handleStallClick(num)}>
            {num}
          </button>
        ))}
      </div>

      {/* Row Container with Left Column, Middle Content, and Right Column */}
      <div className="row-container">
        {/* Left Column */}
        <div className="left-column">
          {[3, 2, 1].map((num) => (
            <button className="stall" key={num} onClick={() => handleStallClick(num)}>
              {num}
            </button>
          ))}
        </div>

        {/* Center Content */}
        <div className="center-content">
          {/* Second Row */}
          <div className="second-row">
            {[22, 21, 20, 19, 18, 17, 16, 15, 14].map((num) => (
              <button className="stall" key={num} onClick={() => handleStallClick(num)}>
                {num}
              </button>
            ))}
            {[23, 24, 25, 26, 27, 28, 29, 30, 31].map((num) => (
              <button className="stall" key={num} onClick={() => handleStallClick(num)}>
                {num}
              </button>
            ))}
          </div>

          {/* Middle Row */}
          <div className="middle-row">
            {[40, 39, 38, 37, 36, 35, 34, 33, 32].map((num) => (
              <button className="stall" key={num} onClick={() => handleStallClick(num)}>
                {num}
              </button>
            ))}
            {[41, 42, 43, 44, 45, 46, 47, 48, 49].map((num) => (
              <button className="stall" key={num} onClick={() => handleStallClick(num)}>
                {num}
              </button>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            {[59, 58, 57, 56, 55, 54, 53].map((num) => (
              <button className="stall" key={num} onClick={() => handleStallClick(num)}>
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {[50, 51, 52].map((num) => (
            <button className="stall" key={num} onClick={() => handleStallClick(num)}>
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiry Form Popup */}
      {isFormVisible && (
        <div className="form-popup">
          <div className="form-content">
            <h3>Registration Form </h3>
            <p style={{fontSize:'15px'}}>Stall Number: {selectedStall}</p>
            <form>
              <label>
               Full Name:
                <input type="text" name="name" required />
              </label>
              <br />
              <label>
               Company/Organaization Name:
                <input type="text" name="name" required />
              </label>
              <br />
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <br />
              <label>
                Mobile No.:
                <input type="number" name="mobile" required />
              </label>
              <br />
              <label>
                City & State:
                <input type="text" name="location" required />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCloseForm}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default StallGrid;
