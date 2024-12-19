"use client";

import React, { useState } from "react";
import Link from "next/link";

interface WhyUs {
  iconName: string;
  title: string;
  shortText: string;
  btnText: string;
}

const WhyUsData: WhyUs[] = [
  {
    iconName: "icofont-users-alt-2",
    title: "Networking and Collaboration",
    shortText:
      "Connect with corporations, NGOs, and assistive tech innovators to foster partnerships and collaborations, enhancing impactful local initiatives.",
    btnText: "Read More",
  },
  {
    iconName: "icofont-globe",
    title: "Influence and Leadership",
    shortText:
      "Engage in meaningful discussions on accessibility and inclusion while showcasing your leadership and commitment to these vital areas.",
    btnText: "Read More",
  },
  {
    iconName: "icofont-users-social",
    title: "Enhanced Community Engagement",
    shortText:
      "Join a high-impact event uniting key players in PCMC, including registered PWD organizations, strengthening local ecosystem ties.",
    btnText: "Read More",
  },
  {
    iconName: "icofont-heart-alt",
    title: "Demonstration of Commitment",
    shortText:
      "Demonstrate your commitment to social responsibility and inclusivity, positioning your organization as a leader in fostering support.",
    btnText: "Read More",
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
        <div className="row m-0 justify-content-center">
          {WhyUsData &&
            WhyUsData.slice(0, 4).map((value, i) => (
              <div className="col-lg-3 col-sm-6 p-0" key={i}>
                <div className="single-box">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div className="content">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>
                        <h3>{value.title}</h3>
                        {/* <p>{value.shortText}</p> */}
                        <button
                          className="btn btn-primary"
                          onClick={() => openModal(value.shortText)}
                        >
                          {value.btnText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <ul className="slideshow">
          <li>
            <span
              style={{ backgroundImage: `url(/images/image1.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/image2.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/image4.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/image10.jpg)` }}
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
