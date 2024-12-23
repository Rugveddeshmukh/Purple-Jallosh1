"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {

  return (
    <>
      <footer className="footer-area">
        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        >
          <div className="row"style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
            gap: "20px",
          }}
           >
            {/* Left Column with Map */}
            <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
              <div className="single-footer-widget">
                <h3>Venue Location</h3>
                <span>
                  <i className="icofont-calendar"></i> 17<sup>th</sup> - 19<sup>th</sup>  January, 2025
                </span>

                <p className="location">
                  <i className="icofont-google-map"></i> Auto Cluster Exhibition
                  Center, H-Block, Chinchwad East, 181, Old Mumbai - Pune Hwy,
                  MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019
                </p>
                  <Link href="/contact-us" className="contact-authority">
                  <i className="icofont-phone"></i> Contact Us
                </Link>
              </div>
            </div>

            {/* Embedded Map */}
           <div
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
              display: "flex",
              justifyContent: "center",
            }}
          >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5601269561766!2d73.79904587471056!3d18.63884446555172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84992d04bbd%3A0x9f1c44fb853ba461!2sAuto%20Cluster%20Exhibition%20Center!5e0!3m2!1sen!2sin!4v1734504354767!5m2!1sen!2sin"
            style={{
            width: "100%", // Dynamic width for mobile and desktop
            maxWidth: "400px", // Maximum width for larger screens
            height: "250px", // Height for mobile and desktop consistency
            border: 0,
            borderRadius: "2px", // Optional: adds rounded corners for aesthetic
           // marginTop:"px",
            
          }}
           loading="lazy"
          ></iframe>
          </div>

            {/* Right Column with Social Links */}
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Follow Us On</h3>
                {/* <p>
                  Don&apos;t miss Link thing! Receive daily news You should
                  connect social area for Any Proper Updates Anytime.
                </p> */}

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61569597896487"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@DivyangBhavanPCMC"
                      className="youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-youtube-play"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/divyang-bhavan-pcmc"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/purple_jallosh_pune/"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            


            {/* Footer Bottom */}
            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logofoot.png"
                      alt="logo"
                      width={150}
                      height={50}
                      
                    />
                  </Link>
                </div>

                <ul>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                </ul>

                <p>
                  © Powered by{" "}
                  <a
                    href="https://azown.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"#fff"}}
                  >
                   - Azown Technology Pvt Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
