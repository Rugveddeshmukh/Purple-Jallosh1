"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const GoTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "9768606974"; // Replace with your WhatsApp number
    const message = "Hello! I need assistance.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {showButton && (
        <div
          onClick={openWhatsApp}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25d366", // WhatsApp green color
            color: "#ffffff",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaWhatsapp size={32} />
        </div>
      )}
    </>
  );
};

export default GoTop;
