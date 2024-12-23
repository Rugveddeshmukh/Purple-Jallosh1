"use client"; // Ensure this is a client-side component

import React, { useState } from "react";
import { Modal, Button, TextField, Box } from "@mui/material";
import Image from "next/image"; // For optimized image loading

const StallBooking = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null); // To hold the uploaded image
  const [formData, setFormData] = useState({
    StallNo: "",
    FullName: "",
    Contact: "",
    Email: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [resultMessage, setResultMessage] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle image upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Show the selected image in the preview
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate the form
  const validateForm = () => {
    const validationErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) validationErrors[key] = "* Required";
    });
    return validationErrors;
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Web3Forms API submission
    const form = new FormData();
    form.append("access_key", "c96e735a-d2d1-4cab-a5b9-a93bf3ba543c"); // Replace with your Web3Forms access key
    Object.entries(formData).forEach(([key, value]) =>
      form.append(key, value)
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form submitted successfully!");
        setResultMessage("Registration successful! Email sent.");
        setFormData({
          StallNo: "",
          FullName: "",
          Contact: "",
          Email: "",
        });
        setErrors({});
        handleClose();
      } else {
        setResultMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResultMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Image Upload Preview */}
      <div style={{ marginBottom: "10px" }}>
        <Image
          src={image || "/images/Hall A.jpg"} // Use uploaded image or fallback to static import
          alt="Stall Layout"
          width={1000} // Image width
          height={800} // Image height
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Book Stall Button */}
      <Button
        variant="contained"
        style={{ marginBottom: "10px", backgroundColor: "rgb(78,34,111)" }}
        onClick={handleOpen}
      >
        Book Stall
      </Button>

      <h6 style={{fontSize:"12px",}}>Disclaimer: The Layout provided is tentative and subject to change. The event host reserves all rights to make adjustments if necessary.{" "}</h6>

      {/* Modal for Registration Form */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "300px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          {/* Close Button */}
          <button
           onClick={handleClose}
           style={{
           position: "absolute",
           top: "12px",
           right: "10px",
           background: "transparent",
           border: "none",
           fontSize: "30px",
           color: "gray",
           cursor: "pointer",
           }}
          >
           &times;
          </button>
          <h3>Register for Stall</h3>
          {/* Registration Form */}
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Stall No"
              variant="outlined"
              fullWidth
              margin="normal"
              name="StallNo"
              value={formData.StallNo}
              onChange={handleInputChange}
              error={!!errors.StallNo}
              helperText={errors.StallNo}
              required
            />
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="FullName"
              value={formData.FullName}
              onChange={handleInputChange}
              error={!!errors.FullName}
              helperText={errors.FullName}
              required
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              fullWidth
              margin="normal"
              name="Contact"
              value={formData.Contact}
              onChange={handleInputChange}
              error={!!errors.Contact}
              helperText={errors.Contact}
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              error={!!errors.Email}
              helperText={errors.Email}
              required
            />
            <Button
              variant="contained"
              fullWidth
              style={{ marginTop: "20px", backgroundColor: "rgb(78,34,111)", width:"60%",marginLeft:"50px" }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      {resultMessage && <p style={{ marginTop: "20px" }}>{resultMessage}</p>}
    </div>
  );
};

export default StallBooking;
