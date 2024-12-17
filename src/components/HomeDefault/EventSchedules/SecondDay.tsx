"use client";

import React,{useState} from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";
import emailjs from "emailjs-com";

const SecondDay: React.FC = () => {

  const [showForm, setShowForm] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null); // Store QR code

   // Track remaining booking limit
   const [bookingLimitActivity1, setBookingLimitActivity1] = useState(150);
   const [bookingLimitActivity2, setBookingLimitActivity2] = useState(150);
   const [bookingLimitActivity3, setBookingLimitActivity3] = useState(150);
   const [bookingLimitActivity4, setBookingLimitActivity4] = useState(150);
   const [bookingLimitActivity5, setBookingLimitActivity5] = useState(150);
   const [bookingLimitActivity6, setBookingLimitActivity6] = useState(150);


  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    city: "",
    pincode: "",
    state: "",
  });

  const generateQRCode = (text: string) => {
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      text
    )}&size=150x150`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData, // Data you want to send in the email
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setQrCode(generateQRCode("Thank you for registering!")); // Show QR Code
          setBookingLimitActivity1((prevLimit) => prevLimit - 1); // Reduce count for Activity 1
          setBookingLimitActivity2((prevLimit) => prevLimit - 1); // Reduce count for Activity 2
          setBookingLimitActivity3((prevLimit) => prevLimit - 1); // Reduce count for Activity 3
          setBookingLimitActivity4((prevLimit) => prevLimit - 1); // Reduce count for Activity 4
          setBookingLimitActivity5((prevLimit) => prevLimit - 1); // Reduce count for Activity 5
          setBookingLimitActivity6((prevLimit) => prevLimit - 1); // Reduce count for Activity 6

          setShowForm(false); // Close the modal
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
   
  };

  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                <Image
                  src="/images/dummy images.png"
                  title="ZXR"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>
                  EVENT SCHEDULE 2 DAY
                </h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span>Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>	10:00 AM - 04:00 PM: User Centered Design Hackathon for College Students</li>
            <li>	11:00 AM - 05:00 PM: Assistive Tech Expo, Experience Zones, and Local NGO Stalls</li>
            <li>	12:00 AM - 04:00 PM: Abilympics</li>
            <li>	01:00 AM - 02:00 PM: Lunch Break</li>
            <li>	01:00 AM - 05:00 PM: Creative Workshops for Children with Disabilities</li>
            <li>	02:00 AM - 03:30 PM: Panel Discussions</li>
            <li>	05:00 PM - 06:00 PM: Mainstage Event: Miracle on Wheels</li>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
              <p
                  style={{
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "Green",
                    color: "white",
                  }}
                >
                  Available Seat: {bookingLimitActivity1}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Skilling and Vocational Training</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span>Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 12:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity1 > 0 ? "purple" : "gray",
                      border: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      cursor: bookingLimitActivity1 > 0 ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      if (bookingLimitActivity1 > 0) {
                        setShowForm(true);
                        setBookingLimitActivity1(bookingLimitActivity1 - 1); // Decrement booking limit for Activity 2
                      }
                    }}
                    disabled={bookingLimitActivity1 <= 0} // Disable button when no slots are left
                  >
                    {bookingLimitActivity1 > 0 ? "Pre-Booking" : "No Slots Available"}
                  </button>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>TOPIC:- Skilling and Vocational Training</li>
             <span> SPEAKER:- Bhushan Punani - Moderator, Meenakshi Nikam,  </span>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b>Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019, {" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
               <p
                  style={{
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "Green",
                    color: "white",
                  }}
                >
                  Available Seat: {bookingLimitActivity2}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Inclusive higher Education / Integration</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 12:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity2 > 0 ? "purple" : "gray",
                      border: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      cursor: bookingLimitActivity2 > 0 ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      if (bookingLimitActivity2 > 0) {
                        setShowForm(true);
                        setBookingLimitActivity2(bookingLimitActivity2 - 1); // Decrement booking limit for Activity 2
                      }
                    }}
                    disabled={bookingLimitActivity2 <= 0} // Disable button when no slots are left
                  >
                    {bookingLimitActivity2 > 0 ? "Pre-Booking" : "No Slots Available"}
                  </button>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>TOPIC:- Inclusive higher Education / Integration </li>
            <span>SPEAKER:-Yajurvendra Mahajan, Jaee Khamkar, Jai Vakil Foundation</span>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
               <p
                  style={{
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "Green",
                    color: "white",
                  }}
                >
                  Available Seat: {bookingLimitActivity3}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Film / Interaction</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 12:00AM - 01:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity3 > 0 ? "purple" : "gray",
                      border: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      cursor: bookingLimitActivity3 > 0 ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      if (bookingLimitActivity3 > 0) {
                        setShowForm(true);
                        setBookingLimitActivity3(bookingLimitActivity3 - 1); // Decrement booking limit for Activity 2
                      }
                    }}
                    disabled={bookingLimitActivity3 <= 0} // Disable button when no slots are left
                  >
                    {bookingLimitActivity3 > 0 ? "Pre-Booking" : "No Slots Available"}
                  </button>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>TOPIC:- Film / Interaction</li>
            <span>SPEAKER:- </span>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

         <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
               <p
                  style={{
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "Green",
                    color: "white",
                  }}
                >
                  Available Seat: {bookingLimitActivity4}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Employment and self employment</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 02:00AM - 03:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity4 > 0 ? "purple" : "gray",
                      border: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      cursor: bookingLimitActivity4 > 0 ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      if (bookingLimitActivity4 > 0) {
                        setShowForm(true);
                        setBookingLimitActivity4(bookingLimitActivity4 - 1); // Decrement booking limit for Activity 2
                      }
                    }}
                    disabled={bookingLimitActivity4 <= 0} // Disable button when no slots are left
                  >
                    {bookingLimitActivity4 > 0 ? "Pre-Booking" : "No Slots Available"}
                  </button>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>TOPIC:- Employment and self employment </li>
            <span>SPEAKER:- Shruti Pushkarna - Moderator, Shanti Raghavan, Bhavesh Bhatia
            </span>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

         <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
               <p
                  style={{
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "Green",
                    color: "white",
                  }}
                >
                  Available Seat: {bookingLimitActivity5}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Prevention, Early Detection, Early Intervention</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 03:00AM - 04:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity5 > 0 ? "purple" : "gray",
                      border: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      cursor: bookingLimitActivity5 > 0 ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      if (bookingLimitActivity5 > 0) {
                        setShowForm(true);
                        setBookingLimitActivity5(bookingLimitActivity5 - 1); // Decrement booking limit for Activity 2
                      }
                    }}
                    disabled={bookingLimitActivity5 <= 0} // Disable button when no slots are left
                  >
                    {bookingLimitActivity5 > 0 ? "Pre-Booking" : "No Slots Available"}
                  </button>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>TOPIC:- Prevention, Early Detection, Early Intervention</li>
           <span>SPEAKER:- Dr. Varsha Gattu,  Dr. Vachasundar, Pankaj Waghmare , Dr Sameer Dalwai - Moderator
            </span>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

         <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
               <p
                  style={{
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "Green",
                    color: "white",
                  }}
                >
                  Available Seat: {bookingLimitActivity6}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Inclusive Film Screening and Interaction</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 04:00AM - 05:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity6 > 0 ? "purple" : "gray",
                      border: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      cursor: bookingLimitActivity6 > 0 ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      if (bookingLimitActivity6 > 0) {
                        setShowForm(true);
                        setBookingLimitActivity6(bookingLimitActivity6 - 1); // Decrement booking limit for Activity 2
                      }
                    }}
                    disabled={bookingLimitActivity6 <= 0} // Disable button when no slots are left
                  >
                    {bookingLimitActivity6 > 0 ? "Pre-Booking" : "No Slots Available"}
                  </button>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>TOPIC:- Inclusive Film Screening and Interaction</li>
            <span>SPEAKER:- We Care
            </span>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem> 
      </Accordion>
    </>
  );
};

export default SecondDay;
