"use client";

import React from "react";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  // designation: string;
  // socialLinks: SocialLink[];
}

interface SocialLink {
  iconName: string;
  url: string;
  bgColor: string;
}

const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/images/Raghu Degla-modified (1).png",
    name: "Raghu Degla",
    // designation: "Founder & CEO",
  },
  {
    image: "/images/Kanchan Pamnani-modified (1).png",
    name: "Kanchan Pamnani",
    // designation: "Lead Designer",
  },
  {
    image: "/images/Meet Arman Ali-modified (1).png",
    name: "Meet Arman Ali",
    // designation: "Developer Expert",
  },
  {
    image: "/images/Manav Kambale (1).png",
    name: "Manav Kambale",
    // designation: "Senior Visual Designer",
  },
  {
    image: "/images/Nilesh-modified (1).png",
    name: "Nilesh",
    // designation: "Lead Designer",
  },
  {
    image: "/images/Taha haziq-modified (1).png",
    name: "Taha haziq",
    // designation: "Lead Designer",
  },
];

const SpeakersOne: React.FC = () => {
  return (
    <>
      <div className="speakers-area ptb-120">
        <div className="row m-0">
          {SpeakersMemberData &&
            SpeakersMemberData.slice(0, 8).map((value, i) => (
              <div className="col-lg-3 col-sm-6 p-0" key={i}>
                <div className="single-speakers">
                  <Image
                    src={value.image}
                    alt="Speaker"
                    width={800}
                    height={800}
                  />

                  <div className="speakers-content">
                    <h3>{value.name}</h3>
                    {/* <span>{value.designation}</span> */}
                  </div>

                  {/* <ul>
                    {value.socialLinks.map((value, i) => (
                      <li key={i}>
                        <a
                          href={value.url}
                          target="_blank"
                          style={{
                            background: `${value.bgColor}`,
                          }}
                        >
                          <i className={value.iconName}></i>
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SpeakersOne;
