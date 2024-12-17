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
                  EVENT NAME  <b>AND</b> SYMBOLISM
                </h2>

                
                 <li style={{fontSize:"17px"}}>The name Purple Jallosh is carefully crafted to encapsulate the events essence and goals.</li> 
                 <li style={{fontSize:"17px"}}>PURPLE:- represents our commitment to supporting individuals with disabilities and aligns with global initiatives which raises awareness about various disabilities. </li>
                 <li style={{fontSize:"17px"}}>Purple serves as a powerful symbol of advocacy and support for people with disabilities. It reflects a commitment to inclusivity and respect, creating a strong visual identity for the event’s focus on these issues.</li>
                 <li style={{fontSize:"17px"}}>The color purple also signifies creativity and forward-thinking. It represents our dedication to fostering innovative solutions and celebrating diverse talents and perspectives.</li>
                 
                 <li style={{fontSize:"17px"}}>JALLOSH:-The term Jallosh embodies a state of intense happiness and transformative joy. It signifies our aim to create an environment where participants experience a profound sense of inspiration and accomplishment.</li>
                 <li style={{fontSize:"17px"}}>By incorporating Jallosh we emphasize the transformative nature of the event, where attendees not only celebrate achievements but also engage in a journey of collective growth.</li>
                 <li style={{fontSize:"17px"}}>Jallosh highlights our aspiration to generate enthusiasm and drive positive change. It reflects the events goal of uplifting and energizing participants, leaving them with a renewed sense of motivation and purpose.</li>
                  
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
