import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h2>
                Know More About <b>Event </b> PURPLE JALLOSH
                </h2>

                <li style={{fontSize:"17px"}}>WHAT: Purple Jallosh is an event designed to celebrate inclusivity, </li>
                <li style={{fontSize:"17px"}}>creativity, and transformative joy. It aims to bring together diverse stakeholders to foster innovation,</li>
                <li style={{fontSize:"17px"}}>support people with disabilities, and promote a vibrant and supportive community.</li>
                 
                <li style={{fontSize:"17px"}}>The name Purple Jallosh is vibrant and symbolic, carrying a blend of cultural,</li>
                <li style={{fontSize:"17px"}}>emotional, and thematic significance. Heres a deeper exploration of its essence </li>

                
             {/*  <div className="signature">
                  <Image
                    src="/images/signature.png"
                    alt="signature"
                    width={142}
                    height={68}
                  />
                </div> */}

                <Link href="/about-us" className="btn btn-primary">
                  Read More
                  <i className="icofont-double-right"></i>
                </Link>

              {/*  <Link href="#" className="btn btn-secondary">
                  Register Now
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/image7.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
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

               {/* <Link href="/" className="btn btn-primary">
                  Explore More About
                </Link>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
