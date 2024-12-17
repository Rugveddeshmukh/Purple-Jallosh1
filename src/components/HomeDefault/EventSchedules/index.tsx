"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FirstDay from "./FirstDay";
import SecondDay from "./SecondDay";
import ThirdDay from "./ThirdDay";
import { Modal, Button, Form } from "react-bootstrap";

const EventSchedules: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state

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

  // State for form validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Modal Handlers
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
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
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const validationErrors: { [key: string]: string } = {};
    if (!formData.category) validationErrors.category = "* Required";
    if (!formData.FullName) validationErrors.FullName = "* Required";
    if (!formData.Contact) validationErrors.Contact = "* Required";
    if (!formData.Email) validationErrors.Email = "* Required";
    if (!formData.City) validationErrors.City = "* Required";
    if (!formData.PinCode) validationErrors.PinCode = "* Required";
    if (!formData.State) validationErrors.State = "* Required";
    if (!formData.Purpose) validationErrors.Purpose = "* Required";
    return validationErrors;
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      alert("Registration successful!");
      handleModalClose();
    }
  };

  return (
    <>
      <div className="schedule-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Schedule Plan</span>
            <h2>
              Information of <b>Event</b> <br /> Schedules
            </h2>
            <div className="bg-title">Events</div>
            <div className="button-box">
              <button className="btn btn-primary" onClick={handleModalOpen}>
                Register Now
              </button>
            </div>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Tabs className="event-tabs">
                <TabList>
                  <Tab>
                    First Day <span>17 January 2025</span>
                  </Tab>
                  <Tab>
                    Second Day <span>18 January 2025</span>
                  </Tab>
                  <Tab>
                    Third Day <span>19 January 2025</span>
                  </Tab>
                </TabList>

                <TabPanel>
                  <FirstDay />
                </TabPanel>
                <TabPanel>
                  <SecondDay />
                </TabPanel>
                <TabPanel>
                  <ThirdDay />
                </TabPanel>
              </Tabs>
            </div>

            <div className="col-lg-12">
              <div className="btn-box">
                <Link href="#" className="btn btn-primary">
                  Download Schedule (PDF)
                </Link>
                <Link href="#" className="btn btn-secondary">
                  Connect Via Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>

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
          }}
          >
            Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            {/* Category */}
            <Form.Group className="mb-3 text-center">
              <Form.Label>Select Category</Form.Label>
              <div className="d-flex justify-content-center gap-3 mt-2">
                {["Visitor", "NGO/SCHOOL", "Delegate"].map((type) => (
                  <Form.Check
                    type="radio"
                    label={type}
                    name="category"
                    value={type}
                    key={type}
                    checked={formData.category === type}
                    onChange={handleInputChange}
                  />
                ))}
              </div>
              {errors.category && (
                <small className="text-danger">{errors.category}</small>
              )}
            </Form.Group>

            {/* Purpose */}
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
                <option value="Delegate Event Guest">
                  Delegate Event Guest
                </option>
              </Form.Select>
              {errors.Purpose && (
                <small className="text-danger">{errors.Purpose}</small>
              )}
            </Form.Group>

            {/* Other Input Fields */}
            {["FullName", "Contact", "Email", "City", "PinCode", "State", "Message"].map(
              (field) => (
                <Form.Group className="mb-3" key={field}>
                  <Form.Control
                    type="text"
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    //onChange={handleInputChange}
                  />
                  {errors[field] && (
                    <small className="text-danger">{errors[field]}</small>
                  )}
                </Form.Group>
              )
            )}

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventSchedules;
