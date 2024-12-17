"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Venue Location</h3>
                <span>
                  <i className="icofont-calendar"></i> 17-19 January, 2025
                </span>

                <p className="location">
                  <i className="icofont-google-map"></i>  Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,
                  
                </p>

                <Link href="/contact-us" className="contact-authority">
                  <i className="icofont-phone"></i> Contact Our Authority
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Social Connection</h3>
                <p>
                  Don&apos;t miss Link thing! Receive daily news You should
                  connect social area for Any Proper Updates Anytime.
                </p>

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

            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logofoot.png"
                      
                      alt="logo"
                      width={120}
                      height={38}
                      style={{backgroundColor:"white"}}
                    />
                  </Link>
                </div>

                <ul>
                  
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Register Now</Link>
                  </li>
                 {/* <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li> */}
                </ul>

                <p>
                  © Powerd by{" "}
                  <a
                    href="https://hibootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Azown Technology Pvt Ltd
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
