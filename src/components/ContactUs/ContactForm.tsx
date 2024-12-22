"use client";

import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [resultMessage, setResultMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    form.append("access_key", "6198e333-c721-47ec-bdd5-33e0493d7320"); // Replace with your Web3Forms access key
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
        setErrors({});
      } else {
        setResultMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResultMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-area ptb-120">
        <div className="container">
          {/* ContactInfo */}
          <ContactInfo />

          <div className="row h-100 align-items-center contact-form">
            <div className="col-lg-4 col-md-12">
              <div className="leave-your-message">
                <h3>Leave Your Message</h3>
                <p>
                  If you have any questions about the services we provide simply
                  use the form below. We try and respond to all queries and
                  comments within 24 hours.
                </p>

                <div className="stay-connected">
                  <h3>Stay Connected</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61569597896487" target="_blank">
                        <i className="icofont-facebook"></i>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@DivyangBhavanPCMC" target="_blank">
                        <i className="icofont-youtube"></i>
                        <span>youtube</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/purple_jallosh_pune/" target="_blank">
                        <i className="icofont-instagram"></i>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/company/divyang-bhavan-pcmc" target="_blank">
                        <i className="icofont-linkedin"></i>
                        <span>Linkedin</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <form id="contactForm" onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="number">Phone Number*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        id="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.number && <span className="error">{errors.number}</span>}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {resultMessage && <p>{resultMessage}</p>}
    </>
  );
};

export default ContactForm;
