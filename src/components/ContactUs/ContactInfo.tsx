"use client";

import React from "react"; 

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Phone </h4>
              <p>7058282890</p>
              <p></p>
              
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-email"></i>
            </div>

            <div className="content">
              <h4>E-mail</h4>
              <p>purplejallosh<br/>@pcmcdivyangbhavan.org</p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-world"></i>
            </div>

            <div className="content">
              <h4>Location</h4>
              <p>Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Pune, Maharashtra 411019,</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
