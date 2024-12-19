"use client";

import React from "react";

import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Purple Fest Awaits</span>
                <h2>
                  WHO  <b>WE</b> ARE
                </h2>

                
                 <p>Purple Jallosh is an initiative endeavor by the Pimpri Chinchwad Municipal Corporation (PCMC) with Divyang Bhawan Foundation as its host and Inclusive Hub India (IHI) as its knowledge partner, supported by local organizations, corporates, and innovators.  
                    Its a festival that brings together diverse stakeholders to celebrate abilities, promote inclusion, and spark impactful change. This platform empowers voices, showcases potential, and fosters connections that pave the way for a more inclusive society. </p>
                 <br/>
                 <p style={{ fontSize: "20px", fontWeight: "bold",color:"#000" }}>Why Attend Purple Jallosh?</p>
                 <li style={{fontSize:"15px"}}>Unmatched Celebration:- Three days of inspiring activities, performances, and connections showcasing inclusion, assistive technologies, and stories of resilience. </li>
                 <li style={{fontSize:"15px"}}>Inspiring Keynote Speakers:- Hear from visionaries and leaders shaping accessibility and inclusion, sharing insights and innovations empowering PwDs. </li>
                 <li style={{fontSize:"15px"}}>Interactive Workshops:- Join hands-on workshops in universal design, assistive tech, and creative arts. Learn, collaborate, and connect with a purpose-driven community.</li>
                 <li style={{fontSize:"15px"}}>Vibrant Performances:- Enjoy inspiring performances in music, dance, and theater by artists who break barriers through their art.</li>
                 <li style={{fontSize:"15px"}}>Innovative Solutions:- Discover innovative solutions at the Assistive Tech Expo, showcasing smart devices and wearables designed to empower and inspire. </li>
                 <li style={{fontSize:"15px"}}>Empowering Conversations:- Join impactful panels on inclusive education, employment, and healthcare, and contribute to actionable solutions for a better future.</li>
                 <li style={{fontSize:"15px"}}>Family Friendly Festivities:- Purple Jallosh offers creative art corners and interactive zones for all ages. Bring your family and celebrate empowerment together!</li>
                 <li style={{fontSize:"15px"}}>Networking Opportunities:- Connect with individuals, organizations, and professionals dedicated to inclusion—whether you're an innovator, volunteer, or leader, there's a place for you.</li>
                 <li style={{fontSize:"15px"}}>Support Local Initiatives:- Support local NGOs and self-help groups driving change, empowering the PwD community through unique initiatives.</li>
                  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/image7.jpg"
                  className="about-img1"
                  alt="about"
                  width={750}
                  height={500}
                />

                <Image
                  src="/images/image4.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                />

                <Image
                  src="/images/shapes/5.png"
                  className="shape-img"
                  alt="about"
                  width={111}
                  height={111}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
