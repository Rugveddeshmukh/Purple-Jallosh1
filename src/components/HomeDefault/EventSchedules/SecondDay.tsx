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

  const events = [
    { time: "10:00 AM - 04:00 PM", event: "User Centered Design Hackathon for College Students" },
    { time: "11:00 AM - 05:00 PM", event: "Assistive Tech Expo, Experience Zones, and Local NGO Stalls" },
    { time: "12:00 PM - 04:00 PM", event: "Abilympics" },
    { time: "01:00 PM - 02:00PM", event: "Lunch Break" },
    { time: "01:00 PM - 05:00 PM", event: "Creative Workshops for Children with Disabilities" },
    { time: "02:00 PM - 03:30 PM", event: "Panel Discussions" },
    { time: "05:00 PM - 06:00 PM", event: "Mainstage Event: Miracle on Wheels" },
  ];

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
    fullName: "",
    contact: "",
    email: "",
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
        alert("Form submitted successfully!"); 
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
                  title="ZXR"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>
                  EVENT SCHEDULE DAY 2
                </h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span>Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
          <table className="table">
            <thead>
             <tr>
              <th>Time</th>
              <th>Event</th>
             </tr>
            </thead>
         <tbody>
          {events.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.event}</td>
            </tr>
            ))}
          </tbody>
         </table>
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                <br/>
                <b>Disclaimer:</b> The schedule provided is tentative and subject to change. The event host reserves all rights to make adjustments if necessary.{" "}
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
                <h3>Skilling and Vocational Training</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span>Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 12:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity1 > 0 ? "rgb(78,34,111)" : "gray",
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
             <span> SPEAKERS:- Bhushan Punani - Moderator, Meenakshi Nikam  </span>
            
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
                <h3>Inclusive higher Education / Integration</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 12:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity2 > 0 ? "rgb(78,34,111)" : "gray",
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
            <span>SPEAKERS:-Yajurvendra Mahajan, Jaee Khamkar, Jai Vakil Foundation</span>

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
                <h3>Film / Interaction</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 12:00AM - 01:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity3 > 0 ? "rgb(78,34,111)" : "gray",
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
            <span>SPEAKERS:- </span>
            
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
                <h3>Employment and self employment</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 02:00AM - 03:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity4 > 0 ? "rgb(78,34,111)" : "gray",
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
            <span>SPEAKERS:- Shruti Pushkarna - Moderator, Shanti Raghavan, Bhavesh Bhatia
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
                  Available Seat: {bookingLimitActivity5}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Prevention, Early Detection, Early Intervention</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 03:00AM - 04:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity5 > 0 ? "rgb(78,34,111)" : "gray",
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
           <span>SPEAKERS:- Dr. Varsha Gattu,  Dr. Vachasundar, Pankaj Waghmare , Dr Sameer Dalwai - Moderator
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
                  Available Seat: {bookingLimitActivity6}
                </p>
              </div>

              <div className="schedule-info">
                <h3>Inclusive Film Screening and Interaction</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 04:00AM - 05:00PM
                  </li>
                  <button
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: bookingLimitActivity6 > 0 ? "rgb(78,34,111)" : "gray",
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
        position: "relative", // Needed for the absolute position of the close button
      }}
    >
       {/* Close Button */}
        <button
        type="button"
         onClick={() => {
          setShowForm(false);
          }}
          style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "2.5rem",
          color: "gray",
          cursor: "pointer",
        }}
      >
        &times;
      </button>

        <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.8rem" }}>
          Registration Form
       </h2>
       <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Full Name */}
        <input
          type="text"
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        {/* Contact */}
        <input
          type="text"
          required
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        {/* Email */}
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        {/* State */}
        <input
          type="text"
          required
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
          {/* Centered Submit Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
          >
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "rgb(78,34,111)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
            width:"40%",
            textAlign:"center",
            
          }}
        >
          Submit
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

export default SecondDay;
