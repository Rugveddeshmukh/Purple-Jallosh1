"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import "../../i18next"; // Import i18n setup

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  // State for font size
  const [fontSize, setFontSize] = useState<number>(16); // Default font size

  // Font size handlers
  const increaseFontSize = () => setFontSize((prev) => prev + 2);
  const decreaseFontSize = () => setFontSize((prev) => Math.max(10, prev - 2)); // Minimum font size
  const resetFontSize = () => setFontSize(16);

  // Language toggle handler
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "mr" : "en";
    i18n.changeLanguage(newLang); 
  };

  return (
    <div
      style={{
        backgroundColor: "#800080",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        fontSize: `${fontSize}px`, // Correct syntax for dynamic font size
      }}
    >
      {/* Language toggle */}
      <button
        onClick={toggleLanguage}
        style={{
          background: "none",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1em",
        }}
      >
        {t("language")}
      </button>

      {/* Font size controls */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span
          onClick={increaseFontSize}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          {t("fontSizeIncrease")}
        </span>
        <span
          onClick={resetFontSize}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          {t("fontSizeDefault")}
        </span>
        <span
          onClick={decreaseFontSize}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          {t("fontSizeDecrease")}
        </span>
      </div>

      {/* Date display */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <i className="fas fa-calendar-alt"></i>
        <span>{dayjs().format("DD-MM-YYYY")}</span>
      </div>
    </div>
  );
};

export default Header;
