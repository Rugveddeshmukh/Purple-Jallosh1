"use client";

import React, { useState } from "react";
import Link from "next/link";

interface WhyUs {
  iconName: string;
  title: string;
  shortText: string;
  //btnText: string;
}

const WhyUsData: WhyUs[] = [
  {
    iconName: "icofont-people",
    title: "CELEBRATING DIVERSITY",
    shortText:"Purple Jallosh celebrates resilience, diversity, and talent, showcasing the skills and stories of PwDs to inspire positivity and inclusion.",
    //btnText: "Read More",
  },
  {
      iconName: "icofont-brainstorming",
      title: "INCLUSION AND INNOVATION ",
      shortText:
        "Discover innovative technologies and solutions empowering PwDs, from assistive devices to inclusive practices tackling real-world challenges.",
      //btnText: "Read More",
  },
  
  {
    iconName: "icofont-legal",
    title: "  POLICY AND ADVOCACY DIALOGUE   ",
    shortText: "Join policymakers, organizations, and advocates to influence inclusive policies and address systemic barriers, fostering actionable dialogue for long-term impact.",
    //btnText: "Read More",
  },
  {
    iconName: "icofont-businessman",
    title: " INCLUSIVE EMPLOYMENT OPPORTUNITIES  ",
    shortText:
      "Bridge the employment gap for PwDs by exploring career opportunities, inclusive hiring, and skill development, connecting with employers and changemakers for sustainable solutions.",
    //btnText: "Read More",
  },
  
  
];

const WhyUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="why-choose-us">
  <div className="row m-0 justify-content-between">
    {WhyUsData &&
      WhyUsData.slice(0, 4).map((value, i) => (
        <div className="col-lg-3 col-sm-6 p-0" key={i}>
        
          <div
            className="single-box"
            style={{
              height: "110px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color:"#fff",
              
            }}
          >
            <div className="icon" style={{ fontSize: "2rem", marginBottom: "10px" }}>
              <i className={value.iconName}></i>
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", margin: "10px 0" ,color:"#fff", }}>
              {value.title}
            </h3>
            {/* <button
              className="btn btn-primary"
              onClick={() => openModal(value.shortText)}
            >
              {value.btnText}
            </button> */}
          </div>
        </div>
      ))}
  </div>



        <ul className="slideshow">
          <li>
            <span
              style={{  backgroundColor:"rgb(78,34,111)" }}
            ></span>
          </li>
          <li>
            <span
              style={{  backgroundColor:"rgb(78,34,111)" }}
            ></span>
          </li>
          <li>
            <span
              style={{  backgroundColor:"rgb(78,34,111)" }}
            ></span>
          </li>
          <li>
            <span
              style={{  backgroundColor:"rgb(78,34,111)" }}
            ></span>
          </li>
        </ul>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Know More</h5>
               {/* <button
                  type="button"
                  className="close btn"
                  onClick={closeModal}
                >
                  &times;
                </button>*/ }
              </div>
              <div className="modal-body">
                <p>{modalContent}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhyUs;
