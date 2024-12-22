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
                <span></span>
                <h2 style={{color:"rgb(78,34,111)"}}>
                  About  <b>The</b> Event
                </h2>
                 <p>Purple Jallosh is an initiative endeavor by the Pimpri Chinchwad Municipal Corporation (PCMC) with Divyang Bhavan Foundation as its host and Inclusive Hub India (IHI) as its knowledge partner, supported by local organizations, corporates, and innovators.  
                   <br/> <br/> Its a festival that brings together diverse stakeholders to celebrate abilities, promote inclusion, and spark impactful change. This platform empowers voices, showcases potential, and fosters connections that pave the way for a more inclusive society. </p>

                 <p style={{ fontSize: "40px", fontWeight: "bold",color:"rgb(78,34,111)" }}>Why Attend Purple Jallosh?</p>
                 <p>
                 <li style={{fontWeight:'600',color:'black'  }}>Unmatched Celebration </li>Three days of inspiring activities, performances, and connections showcasing inclusion, assistive technologies, and stories of resilience. 
                 <br/> <br/>  
                 <li style={{fontWeight:'600',color:'black'}}>Inspiring Keynote Speakers</li> Hear from visionaries and leaders shaping accessibility and inclusion, sharing insights and innovations empowering PwDs.
                 <br/> <br/>
                 <li style={{fontWeight:'600',color:'black'}}> Interactive Workshops </li>Join hands-on workshops in universal design, assistive tech, and creative arts. Learn, collaborate, and connect with a purpose-driven community.
                 <br/> <br/>
                 <li style={{fontWeight:'600',color:'black'}}>Networking Opportunities</li> Connect with individuals, organizations, and professionals dedicated to inclusion—whether youre an innovator, volunteer, or leader, theres a place for you.
                 <br/> <br/>
                 <li style={{fontWeight:'600',color:'black'}}> Support Local Initiatives </li> Support local NGOs and self-help groups driving change, empowering the PwD community through unique initiatives.
                 </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/Whatsimg2.jpg"
                  className="about-img1"
                  alt="about"
                  width={750}
                  height={500}
                />

                {/* <Image
                  src="/images/Whatsimg2.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
