"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  //designation: string;
  //socialLinks: SocialLink[];
}

interface SocialLink {
  iconName: string;
  url: string;
  bgColor: string;
}

const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/images/Bhavesh Bhatiya-modified (1).png",
    name: "Bhavesh Bhatiya",
    //designation: "",
    
  },
  {
    image: "/images/Bhushan Punani-modified.PNG",
    name: "Bhushan Punani",
    //designation: "Lead Designer",
    
  },
  {
    image: "/images/Dhananay Bhole-modified.PNG",
    name: "Dhananjay Bhole",
   // designation: "Developer Expert",
    
  },
  {
    image: "/images/Kanchan Pamnani-modified (1).png",
    name: "Kanchan Pamnani",
   // designation: "Senio Visual Designer",
    
  },
  
      
  
  
];

const Speakers: React.FC = () => {
  return (
    <>
      <div className="speakers-area ptb-120 pb-0">
        <div className="container">
          <div className="section-title">
            <span>Speaker Lineup  </span>
            <h2>Who&apos;s Speaking</h2>
            <div className="bar"></div>

            {/* <div className="bg-title">Speakers</div> */}

            <Link href="/speakers" className="btn btn-primary w-full sm:w-auto">
              View More Speakers
            </Link>
          </div>
        </div>

        <div className="row m-0">
          {SpeakersMemberData &&
            SpeakersMemberData.slice(0, 8).map((value, i) => (
              <div className="col-lg-3 col-sm-6 p-0" key={i}>
                <div className="single-speakers">
                  <Image
                    src={value.image}
                    alt="Speaker"
                    width={800}
                    height={400}
                  />

                  <div className="speakers-content" style={{textAlign:'center', alignItems:'center',}}>
                    <h3>{value.name}</h3>
                  {/*  <span>{value.designation}</span>*/}
                  </div>

                {/*  <ul>
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
                  </ul>*/}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Speakers;
