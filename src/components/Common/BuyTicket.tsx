"use client";

import React from "react";
import Link from "next/link"; 

const BuyTicket: React.FC = () => {
  return (
    <>
      <div 
        className="buy-tickets-area ptb-120"
        style={{
          backgroundImage: `url(/images/buy-tickets-bg.jpg)`
        }}
      >
        <div className="buy-tickets">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title">
                  <span>Hurry Up!</span>
                  <h2>Join Now</h2>

                  <p>
                  Advocate for change and spread the word. Every voice helps amplify the issues we care about.
                  </p>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="buy-ticket-btn">
                  <Link href="#" className="btn btn-primary">
                    Register Now
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTicket;
