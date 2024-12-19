"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "./Countdown";
import { Modal, Button, Form } from "react-bootstrap";
import { url } from "inspector";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false); // Lightbox toggler
  const [showModal, setShowModal] = useState(false); // Modal visibility

  // State for form data
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

  // State for form validation
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Fixed error typing

  // Modal Handlers
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.category) errors.category = "* Required";
    if (!formData.FullName) errors.FullName = "* Required";
    if (!formData.Contact) errors.Contact = "* Required";
    if (!formData.Email) errors.Email = "* Required";
    if (!formData.City) errors.City = "* Required";
    if (!formData.PinCode) errors.PinCode = "* Required";
    if (!formData.State) errors.State = "* Required";
    if (!formData.Purpose) errors.Purpose = "* Required";
    return errors;
  };

  // Form submission handler
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

  return (
    <>
      {/* Lightbox */}
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=ML76DRU-c6U"]}
      />

      {/* Banner */}
      <div
        className="main-banner"
        style={{
          backgroundImage: 'url("/images/mainbaneer.jpg")'
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <p>
                  Get <span>ready</span> to Embrace the Purple Vibe
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Inclusion is not just about accommodating differences its about embracing them and creating a world where everyone belongs  <br />
                  <span
                    style={{
                      color: "white",
                      fontSize: "43px",
                      fontWeight: "600",
                   
                    }}
                  >
                  The Unmissable Celebration
                  <br/>
                   PURPLE JALLOSH - 2025
                  </span>
                  <br />
                </p>

                <ul>
                  <li>
                    <i className="icofont-compass"></i> Venue- Auto Cluster Exhibition
                     Ground  
                  </li>
                  <li>
                    <i className="icofont-calendar"></i> 17-19 Jan, 2025
                  </li>
                </ul>

                <div className="button-box">
                  <button
                    className="btn btn-primary"
                    onClick={handleModalOpen}
                  >
                    Register Now
                  </button>
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn d-sm-inline"
                  >
                    <i className="icofont-ui-play"></i> Watch Promo Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <Countdown endDate="2025-01-17T07:00:00" />

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shapes/1.png"
            alt="shape1"
            width={77}
            height={77}
          />
        </div>
        <div className="shape2 rotateme">
          <Image
            src="/images/shapes/2.png"
            alt="shape2"
            width={38}
            height={38}
          />
        </div>
        <div className="shape3 rotateme">
          <Image
            src="/images/shapes/3.png"
            alt="shape3"
            width={51}
            height={57}
          />
        </div>
        <div className="shape4">
          <Image
            src="/images/shapes/4.png"
            alt="shape4"
            width={29}
            height={29}
          />
        </div>
      </div>

      {/* Registration Modal */}
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
                  <Form.Group className="mb-3">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Select
                      name="Purpose" style={{border:"1px Solid grey" ,borderRadius:"7px"}}
                      value={formData.Purpose}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Purpose</option>
                      <option value="Learn about Accessibilty and Inclusion">
                      Learn about Accessibilty and Inclusion
                      </option>
                      <option value="Media Coverage">
                      Media Coverage
                      </option>
                      <option value="Network and Collaborate">Network and Collaborate</option>
                      <option value="Participate in Workshops and experince zones">Participate in Workshops and experince zones</option>
                      <option value="Volunteer">Volunteer</option>
                    </Form.Select>
                    {errors.Purpose && (
                      <small className="text-danger">{errors.Purpose}</small>
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

export default MainBanner;