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
    Purpose: "",
    Message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
      setFormData({
        category: "",
        FullName: "",
        Contact: "",
        Email: "",
        City: "",
        PinCode: "",
        State: "",
        Purpose: "",
        Message: "",
      });
      setErrors({});
      handleModalClose();
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
      <div id="navbar" className="elkevent-nav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logonav.png"
                alt="logo"
                width={120}
                height={20}
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
                      Register Now
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
          background: "linear-gradient(to bottom, #4A90E2, #B3DDF2)", // Matching the blue gradient
          borderRadius: "10px",
        }}
        >
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3 text-center">
              <Form.Label>Select Category</Form.Label>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Form.Check
                  type="radio"
                  label="Visitor"
                  name="category"
                  value="Visitor"
                  checked={formData.category === "Visitor"}
                  onChange={handleInputChange}
                />
                <Form.Check
                  type="radio"
                  label="NGO/SCHOOL"
                  name="category"
                  value="NGO/SCHOOL"
                  checked={formData.category === "NGO/SCHOOL"}
                  onChange={handleInputChange}
                />
                <Form.Check
                  type="radio"
                  label="Delegate"
                  name="category"
                  value="Delegate"
                  checked={formData.category === "Delegate"}
                  onChange={handleInputChange}
                />
              </div>
              {errors.category && (
                <small className="text-danger">{errors.category}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Purpose</Form.Label>
              <Form.Select
                name="Purpose"
                value={formData.Purpose}
                onChange={handleInputChange}
              >
                <option value="">Select Purpose</option>
                <option value="Visitor to enjoy Purple Jallosh">
                  Visitor to enjoy Purple Jallosh
                </option>
                <option value="School/NGO to participate in Purple Jallosh">
                  School/NGO to participate in Purple Jallosh
                </option>
                <option value="Delegate Event Guest">Delegate Event Guest</option>
              </Form.Select>
              {errors.Purpose && (
                <small className="text-danger">{errors.Purpose}</small>
              )}
            </Form.Group>
            {Object.keys(formData).map((field) =>
              field !== "category" && field !== "Purpose" ? (
                <Form.Group className="mb-3" key={field}>
                  <Form.Control
                    type="text"
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    // onChange={handleInputChange}
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
    </>
  );
};

export default Navbar;