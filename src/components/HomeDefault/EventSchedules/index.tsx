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
    State: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [resultMessage, setResultMessage] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

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
      State: "",
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
    if (!formData.State) validationErrors.State = "* Required";
    return validationErrors;
  };

  // Handle form submission
  const handleFormSubmit = async(e: React.FormEvent) => {
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
        alert("Form submitted successfully!"); 
        setResultMessage("Registration successful! Email sent.");
        setFormData({
        category: "",
        FullName: "",
        Contact: "",
        Email: "",
        City: "",
        State: "",
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


  return (
    <>
      <div className="schedule-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Time Flow  </span>
            <h2>
             <b>Event</b> <br /> Schedule
            </h2>
            <div className="bg-title"></div>
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
                {/* <Link href="#" className="btn btn-primary">
                  Download Schedule (PDF)
                </Link>
                <Link href="#" className="btn btn-secondary">
                  Connect Via Instagram
                </Link> */}
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
               color: "#000",
               }}
               >
              Registration Form
             </Modal.Title>
               </Modal.Header>
                <Modal.Body>
                 <Form onSubmit={handleFormSubmit}>
                   <Form.Group className="mb-3 text-center">
                     <Form.Label>I am Registering As</Form.Label>
                       <Form.Select
                         name="category"
                         style={{ border: "1px Solid grey", borderRadius: "7px" }}
                         value={formData.category}
                         onChange={handleInputChange}
                        >
                        <option value="">Select Category</option>
                        <option value="Delegate (Professional/Corporate Representative)">
                           Delegate (Professional/Corporate Representative)
                        </option>
                        <option value="Educational Institution Representative">
                          Educational Institution Representative
                         </option>    
                            <option value="Healthcare Professional">
                              Healthcare Professional
                            </option>
                            <option value="Media/Influencer">Media/Influencer</option>
                            <option value="NGO/School Representative">
                              NGO/School Representative
                            </option>
                            <option value="Parent or Caregiver">Parent or Caregiver</option>
                            <option value="Visitor">Visitor</option>
                          </Form.Select>
                          {errors.category && <small className="text-danger">{errors.category}</small>}
                        </Form.Group>
            
                        {Object.keys(formData).map((field) =>
                          field !== "category" && field !== "State" ? (
                            <Form.Group className="mb-3" key={field}>
                              <Form.Control
                                type="text"
                                style={{ border: "1px Solid grey", borderRadius: "5px" }}
                                placeholder={field.replace(/([A-Z])/g, " $1")}
                                name={field}
                                value={formData[field as keyof typeof formData]}
                                onChange={(e) =>
                                  handleInputChange(e as React.ChangeEvent<HTMLInputElement>)
                                }
                              />
                              {errors[field] && <small className="text-danger">{errors[field]}</small>}
                            </Form.Group>
                          ) : null
                        )}
            
                        <Form.Group className="mb-3">
                          <Form.Select
                            name="State"
                            style={{ border: "1px Solid grey", borderRadius: "7px" }}
                            value={formData.State}
                            onChange={handleInputChange}
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </Form.Select>
                          {errors.State && <small className="text-danger">{errors.State}</small>}
                        </Form.Group>
            
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

export default EventSchedules;
