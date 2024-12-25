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
              <div className="about-content"style={{lineHeight:'30px'}}>
                <span>Experience The Event</span>
                <h2>
               <b>What is</b> Purple Jallosh?
                </h2>

                <p><i>Purple Jallosh is More than just an Event; its a Movement</i> <br/> <br/>
                  Purple Stands for <b> Advocacy, Creativity, and Global Disability Awareness, </b>
                  It represents a commitment to fostering an inclusive society where everyone feels valued and empowered.
                  Jallosh, meaning a <b> celebration,</b> captures the festivals joyous <b>spirit of togetherness</b>  and achievement. 
                  <br/> 
                  <br/> <b/>
                  <b>Purple Jallosh 2025  Theme:</b> Celebrating Abilities, Driving Inclusion, and Redefining Possibilities.
                </p>
                
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
                  src="/images/whatimg1.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                {/* <Image
                  src="/images/Whatsimg2.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                /> */}
      

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
