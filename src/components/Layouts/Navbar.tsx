"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal, Button, Form } from "react-bootstrap";
import { menus } from "../../../libs/menus";



const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    category: "",
    FullName: "",
    Contact: "",
    Email: "",
    City: "",
    PinCode: "",
    State: "",
    Message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [resultMessage, setResultMessage] = useState<string>("");

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== "Message") {
        errors[key] = "* Required";
      }
    }
    return errors;
  };

  const handleFormSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
     // Web3Forms API submission
    const form = new FormData();
    form.append("access_key", "6198e333-c721-47ec-bdd5-33e0493d7320");
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
        setResultMessage("Registration successful! Email sent.");
        setFormData({
        category: "",
        FullName: "",
        Contact: "",
        Email: "",
        City: "",
        PinCode: "",
        State: "",
        Message: "",
      });
      setErrors({});
      handleModalClose();
    }
    else {
      setResultMessage("Failed to send email. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setResultMessage("An error occurred. Please try again.");
  }
  };

  useEffect(() => {
    const elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="elkevent-nav" style={{height:"130px", backgroundColor:"#fff"}}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logonav.png"
                alt="logo"
                width={120}
                height={18}
                
              />
            </Link>
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                {menus.map((menuItem) => (
                  <li key={menuItem.label} className="nav-item">
                    <Link href={menuItem.link} className="nav-link">
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="others-option">
                <ul>
                  <li>
                    <button
                      onClick={handleModalOpen}
                      className="btn btn-primary"
                    >
                      REGISTER NOW
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "1.5rem",
            color: "#000",
            
          }}
          >
            Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body
        style={{
          background: "linear-gradient(to bottom, )", // Matching the blue gradient
          borderRadius: "10px",
        }}
        >
          <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 text-center" >
           <Form.Label>I am Registering As</Form.Label>
           <Form.Select
            name="category" style={{border:"1px Solid grey" ,borderRadius:"7px"}}
            value={formData.category}
            onChange={handleInputChange}
            >
            <option value="">Select Category </option>
            <option value="Delegate (Professional/Corporate Representative)">Delegate (Professional/Corporate Representative)</option>
            <option value="Educational Institution Representative">Educational Institution Representative</option>
            <option value="Healthcare Professional">Healthcare Professional</option>
            <option value="Media/Influencer">Media/Influencer</option>
            <option value="NGO/School Representative">NGO/School Representative</option>
            <option value="Parent or Caregiver">Parent or Caregiver</option>
            <option value="Visitor">Visitor</option>
           </Form.Select>
           {errors.category && (
             <small className="text-danger">{errors.category}</small>
             )}
            </Form.Group>
            {Object.keys(formData).map((field) =>
              field !== "category" && field !== "Purpose" ? (
                <Form.Group className="mb-3" key={field}>
                  <Form.Control
                    type="text" style={{border:"1px Solid grey" ,borderRadius:"5px"}}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) =>
                      handleInputChange(e as React.ChangeEvent<HTMLInputElement>)
                    }
                  />
                  {errors[field] && (
                    <small className="text-danger">{errors[field]}</small>
                  )}
                </Form.Group>
              ) : null
            )}
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" type="submit" style={{ width: "40%" }}>
             Submit
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {resultMessage && <p className="text-center mt-3">{resultMessage}</p>}
    </>
  );
};

export default Navbar;