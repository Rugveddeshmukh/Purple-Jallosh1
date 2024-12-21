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
    iconName: "icofont-users-alt-2",
    title: " NETWORKING AND COLLABORATION",
    shortText:"At Purple Jallosh, we foster collaboration for inclusive progress. Connect with like-minded organizations and leaders to build impactful partnerships that drive accessibility and inclusion for Persons with Disabilities (PwDs).",
   // btnText: "Read More",
  },
  {
    iconName: "icofont-globe",
    title: " INFLUENCE AND LEADERSHIP ",
    shortText:"Lead impactful discussions on accessibility, inclusion and policy at Purple Jallosh. Join leaders and changemakers to inspire action and drive systemic change for an inclusive society.",
   // btnText: "Read More",
  },
  {
    iconName: "icofont-users-social",
    title: " ENHANCED COMMUNITY ENGAGEMENT ",
    shortText: "Engage with PCMC, PwD organizations, and community leaders to strengthen ecosystems and develop solutions for accessibility, employment, education, and healthcare.",
    //btnText: "Read More",
  },
  {
    iconName: "icofont-wheelchair",
    title: "ACCESSIBLE EVENT EXPERIENCE ",
    shortText:
      "Demonstrate your commitment to social responsibility and inclusivity, positioning your organization as a leader in fostering support.",
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
     <div className="section-title" style={{marginLeft:"70px"}}>
       <span>Diversity Inclusion
       </span>
       <h2>Leadership - Impact</h2></div>
       <div className="bar"></div>
      <div className="why-choose-us">
      
  <div className="row m-0 justify-content-between">
    {WhyUsData &&
      WhyUsData.slice(0, 4).map((value, i) => (
        <div className="col-lg-3 col-sm-6 p-0" key={i}>
         <div
            className="single-box"
            style={{
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color:"#fff",
              
            }}
          >
            <div className="icon" style={{ fontSize: "2rem", marginBottom: "10px", textAlign:'center'}}>
              <i className={value.iconName}></i>
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", margin: "10px 0" ,color:"#fff", textAlign:'center' }}>
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
              style={{ backgroundColor:"rgb(78,34,111)" }}
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
