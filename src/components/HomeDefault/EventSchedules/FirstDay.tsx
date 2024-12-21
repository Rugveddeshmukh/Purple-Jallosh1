"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";


const FirstDay: React.FC = () => {
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
  const [result, setResult] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "6198e333-c721-47ec-bdd5-33e0493d7320");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
       console.log (result)
          setBookingLimitActivity1((prevLimit) => prevLimit - 1); // Reduce count for Activity 1
          setBookingLimitActivity2((prevLimit) => prevLimit - 1); // Reduce count for Activity 2
          setBookingLimitActivity3((prevLimit) => prevLimit - 1); // Reduce count for Activity 3
          setBookingLimitActivity4((prevLimit) => prevLimit - 1); // Reduce count for Activity 4
          setBookingLimitActivity5((prevLimit) => prevLimit - 1); // Reduce count for Activity 5
          setBookingLimitActivity6((prevLimit) => prevLimit - 1); // Reduce count for Activity 6

          setShowForm(false); // Close the modal
     // event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
              <Image
                  src="/images/logonav.png"
                  title="BCD"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>EVENT SCHEDULE DAY 1</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>	10:00 AM - 11:00 AM:  Opening Ceremony </li>
            <li>	11:00 AM - 05:00 PM:  Assistive Tech Expo and Experience Zones</li>
            <li>	11:00 AM - 05:00 PM:  Local NGO Stalls and Jagruti Mela</li>
            <li>	12:00 AM - 04:00 PM:  Aids and Assistive Devices Distribution</li>
            <li>	01:00 PM - 02:00 PM:  Lunch Break</li>
            <li>	01:00 AM - 05:00 PM:  Creative Workshops for Children with Disabilities</li>
            <li>	02:00 AM - 03:30 PM:  Panel Discussions</li>
            <li>	05:00 PM - 06:00 PM:  Special School Performancess</li>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                 <div className="location">
                  <br/>
                  <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> 
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
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
                <h3>Panel Discussion on Prevention, Early Detection and Early Intervention</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 11:00PM
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
            <li>TOPIC:- Panel Discussion on Prevention, Early Detection and Early Intervention</li>
             <span>SPEAKERS:- Dr. Varsha Gattu,  Dr. Vachasundar, Pankaj Waghmare, Dr. Sameer Dalwai - Moderator.</span>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                {/* <div className="location">
                  <br/>
                  <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> */}
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
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
                <h3>UDID and its importance</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 11:00AM - 12:00PM
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
            <li>TOPIC:- UDID and its importance</li> 
            <span>SPEAKERS:- Abhijit Raut, Anjali Nilekar, Shri Shingade, Sangita Kalbhor </span> 
            
           <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                {/* <div className="location">
                  <br/>
                  <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> */}
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
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
                <h3>Inclusive Film Screening and Interaction</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divynag Bhavan Foundation
                  </li> */}
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
            <li>TOPIC:- Inclusive Film Screening and Interaction </li>
            <span>SPEAKERS:- We Care
            </span>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                {/* <div className="location">
                <br/>
                <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> */}
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
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
                <h3>Importance of Therapy</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divynag Bhavan Foundation
                  </li> */}
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
            <li>TOPIC:-Importance of Therapy</li> 
            <span>SPEAKERS:- Dr. Rajiv Sharangpani, Dr. Varsha Deshpande, Samruddhi Kulkarni, Dr. Meenakshi Kamble, Shrirang Bijur - Moderator </span>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                {/* <div className="location">
                <br/>
                <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> */}
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
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
                <h3>Importance of Assistive devices / Limbs</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divynag Bhavan Foundation
                  </li> */}
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
            <li>TOPIC:- Importance of Assistive devices / Limbs</li>
             <span>SPEAKERS:- Gote (Alimco), Dr. Sahoo, Manav Kamble - Moderator, Dr. Anap (Nagar DDRC) </span>
      
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                {/* <div className="location">
                <br/>
                <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> */}
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
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
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divynag Bhavan Foundation
                  </li> */}
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
             <span>SPEAKERS:- We Care </span>
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                {/* <div className="location">
                  <br/>
                <b>(Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.){" "}
                </div> */}
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                {/* <Link href="#" className="btn btn-primary">
                  View Details
                </Link> */}
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      {/* Modal for Registration Form */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              maxHeight: "80vh", // Max height for the modal
              overflowY: "auto", // Enables scrolling within the modal if the content overflows
            }}
          >
            

            <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.8rem" }}>
              Registration Form
            </h2>
            <form onSubmit={onSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label>First Name:</label>
                <input
                  type="text"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Last Name:</label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Contact:</label>
                <input
                  type="text"
                  required
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Email:</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>City:</label>
                <input
                  type="text"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Pincode:</label>
                <input
                  type="text"
                  required
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>State:</label>
                <input
                  type="text"
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "purple",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              
                {/* Buttons */}
              <div
                 style={{
                 display: "flex",
                 justifyContent: "space-around",
                 marginTop: "10px",
                 
                }}
                >
                {/* Close Button */}
              <button
                 type="button"
                 onClick={() => {
                 setShowForm(false);
                }}
                 style={{
                 padding: "10px 20px",
                 backgroundColor: "gray",
                 color: "white",
                 border: "none",
                 borderRadius: "3px",
                 cursor: "pointer",
                 width: "100%",
                }}
                >
              Close
           </button>

           </div>
           </form>   
          
          </div>
        </div>
      )} 

      {/* Display QR Code after successful registration */}
      {qrCode && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>Registration Successful! Here is your QR Code:</h3>
          <Image src={qrCode} alt=" QR Code" />
        </div>
      )}
    </>
  );
};

export default FirstDay;
