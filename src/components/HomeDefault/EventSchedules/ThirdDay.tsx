"use client";

import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import emailjs from "emailjs-com";

const ThirdDay: React.FC = () => {

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
                  title="Steven Smith"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>EVENT SCHEDULE DAY 3</h3>

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
            <li>  10:00 AM - 04:00 PM: Assistive Tech Expo, Experience Zones, and Local NGO Stalls</li>
            <li>	12:00 AM - 04:00 PM: Aids and Assistive Devices Distribution</li>
            <li>	12:00 AM - 04:00 PM: Abilympics</li>
            <li>  01:00 AM - 02:00 PM: Lunch Break</li>
            <li>	01:00 AM - 03:30 PM: Creative Workshops for Children with Disabilities</li>
            <li>	04:00 PM - 05:00 PM: Mainstage Event: Live Music Band</li>
            <li>	05:00 PM - 06:00 PM: Closing Ceremony</li>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                <br/>
                <b>Disclaimer:</b> The schedules provided are tentative and subject to change. The event host reserves all rights to make adjustments if necessary.{" "}
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
                <h3>Sports as therapy and career</h3>

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
          <li>TOPIC:- Sports as therapy and career</li>
           <span>SPEAKERS:-Bal Kalyan Sanstha, Vaishnavi Jagtap,  Shri Kumbhar
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
                  Available Seat: {bookingLimitActivity2}
                </p>
              </div>

              <div className="schedule-info">
                <h3>National  Trust /Guardianship / Reality</h3>

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
          <li>TOPIC:- National  Trust /Guardianship / Reality</li>
           <span>SPEAKERS:- Bhagyashri More, Nandkurmar Phule, Agarkar Madam, Rajendra Waghchaure 
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
                  Available Seat: {bookingLimitActivity3}
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
          <li>TOPIC:- Inclusive Film Screening and Interaction</li>
         <span>SPEAKERS:- We care
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
                <h3>Act Implementation and Advocacy</h3>

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
          <li>TOPIC:- Act Implementation and Advocacy </li>
          <span>SPEAKERS:- Armaan Ali, Kanchan Pamnani, Jasmina Khanna, Davkhar Madam, Suhas Tendulkar
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
                <h3>What after Us</h3>

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
          <li>TOPIC:- What after Us</li>
          <span>SPEAKERS:- Achyut Godbole, Vidya Phadke, Ambika Takalkar, A B Rajmane
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
                <h3>Action Plan</h3>

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
          <li>TOPIC:- Action Plan</li>
           <span>SPEAKERS:- Armaan,Vijay Kanhekar, Abhijit Murugkar, Omprakash Deshmukh, Paresh Gandhi, Manav Kamble
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

export default ThirdDay;
