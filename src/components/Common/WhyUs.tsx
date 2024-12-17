"use client";

import React from "react";
import Link from "next/link";

interface WhyUs {
  iconName: string;
  title: string;
  shortText: string;
  btnText: string;
  //btnLink: string;
}

const WhyUsData: WhyUs[] = [
  {
    iconName: "icofont-users-alt-2",
    title: "Netwoking and Collabration",
    shortText:
      "Connect with corporations, NGOs, and assistive tech innovators to foster partnerships and collaborations, enhancing impactful local initiatives.",
     btnText: "",
    //btnLink: "#",
  },
  {
    iconName: "icofont-globe",
    title: "Influence and Leadership",
    shortText:
      "Engage in meaningful discussions on accessibility and inclusion while showcasing your leadership and commitment to these vital areas..",
    btnText: "",
   // btnLink: "#",
  },
  {
    iconName: "icofont-users-social",
    title: "Enhanced Community Engagement",
    shortText:
      "Join a high-impact event uniting key players in PCMC, including registered PWD organizations, strengthening local ecosystem ties.",
    btnText: "",
   // btnLink: "#",
  },
  {
    iconName: "icofont-heart-alt",
    title: "Demonstration of Commitment",
    shortText:
      "Demonstrate your commitment to social responsibility and inclusivity, positioning your organization as a leader in fostering support.",
    btnText: "",
   // btnLink: "#",
  },
];

const WhyUs: React.FC = () => {
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
                        <p>{value.shortText}</p>

                       <Link href={value.btnText} className="btn btn-primary">
                          {value.btnText}
                        </Link>
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
    </>
  );
};

export default WhyUs;
