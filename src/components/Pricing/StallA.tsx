"use client";
import { useState, useEffect } from "react";

// Define types for Stall
interface Stall {
  id?: number;
  title?:string;
  color: string;
}

interface RegistrationFormData {
  fullName: string;
  contact: string;
  email: string;
  organizer: string;
  city: string;
  state: string;
}

function App() {
  const stalls: Stall[] = [
    { id: 30, color: "yellow" },
    { id: 29, color: "yellow" },
    { id: 28, color: "yellow" },
    { id: 27, color: "yellow" },
    { id: 26, color: "yellow" },
    { title: "Emergency Exit", color: "white" },  // Added title for entry gate
    { id: 25, color: "yellow" }, 
    { id: 24, color: "yellow" },
    { id: 23, color: "yellow" },
    { id: 22, color: "yellow" },
    { id: 21, color: "yellow" },
    { id: 20, color: "yellow" },
    { id: 19, color: "yellow" },
    { id: 18, color: "yellow" },
    { id: 17, color: "yellow" },
    { id: 16, color: "yellow" },
    { id: 15, color: "yellow" },
    { id: 14, color: "yellow" },
    { id: 13, color: "yellow" },
    { id: 12, color: "yellow" },
    { id: 11, color: "yellow" },
    { id: 10, color: "yellow" },
    { id: 9, color: "yellow" },
    { id: 8, color: "yellow" },
    { id: 31, color: "skyblue" },
    { id: 32, color: "skyblue" },
    { id: 7, color: "skyblue" },
    { id: 6, color: "skyblue" },
    { id: 6, color: "skyblue" },
    { id: 33, color: "green" },
    { id: 34, color: "yellow" },
    { id: 35, color: "yellow" },
    { id: 36, color: "yellow" },
    { id: 37, color: "yellow" },
    { id: 38, color: "yellow" },
    { id: 39, color: "yellow" },
    { id: 40, color: "yellow" },
    { id: 41, color: "yellow" },
    { id: 42, color: "yellow" },
    { id: 43, color: "yellow" },
    { id: 44, color: "yellow" },
    { id: 45, color: "yellow" },
    { id: 46, color: "yellow" },
    { id: 47, color: "yellow" },
    { id: 48, color: "yellow" },
    { id: 49, color: "yellow" },
    { id: 50, color: "yellow" },
    { title: "", color: "white" }, // Entry added her
    { id: 1, color: "yellow" },
    { id: 2, color: "yellow" },
    { id: 3, color: "yellow" },
    { id: 4, color: "yellow" },
    { id: 5, color: "green" },
  ];

  const innerStalls: Stall[] = [
    { id: 62, color: "white" },
    { id: 63, color: "white" },
    { id: 64, color: "white" },
    { id: 61, color: "white" },
    { id: 60, color: "white" },
    { id: 59, color: "white" },
    { id: 65, color: "white" },
    { id: 66, color: "white" },
    { id: 58, color: "white" },
    { id: 57, color: "white" },
    { id: 67, color: "white" },
    { id: 68, color: "white" },
    { id: 56, color: "white" },
    { id: 55, color: "white" },
    { id: 69, color: "white" },
    { id: 70, color: "white" },
    { id: 54, color: "white" },
    { id: 53, color: "white" },
    { id: 71, color: "white" },
    { id: 72, color: "white" },
    { id: 52, color: "white" },
    { id: 51, color: "white" },
  ];

  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedStall, setSelectedStall] = useState<Stall | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    contact: "",
    email: "",
    organizer: "",
    city: "",
    state: "",
  });

  const handleStallClick = (stall: Stall) => {
    setSelectedStall(stall);
    setShowForm(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof RegistrationFormData
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can now process the form data (e.g., save to a database, API request)
    setShowForm(false); // Hide form after submission
  };

  const layoutContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "calc(100% - 200px)",
    maxWidth: "1250px",
    margin: "0 auto",
    border: "5px solid black",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const useWindowWidth1 = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
  
    useEffect(() => {
      // Check if window is available (i.e., running in the browser)
      if (typeof window !== "undefined") {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Set initial window width
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
  
    return windowWidth;
  };
  
  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: "0 230px",
  };
  // Mobile adjustments
if (useWindowWidth1() < 768) {
  columnStyle.margin = "0 30px"; // Adjust margin for mobile view
}


  const middleSectionStyle: React.CSSProperties = {
    display: "flex",
    margin: "40px 0",
  };


  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Set initial window width
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
  
    return windowWidth;
  };
  
  const StallStyle = (color: string): React.CSSProperties => {
    const windowWidth = useWindowWidth();
  
    const baseStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      borderRadius: "4px",
      fontSize: "12px",
      width: "50px",
      height: "50px",
      backgroundColor: color,
      fontWeight: "bold",
      color: color === "black" ? "white" : "black",
      textAlign: "center",
    };
  
    if (windowWidth < 768) {
      return {
        ...baseStyle,
        width: "20px",
        height: "20px",
        fontSize: "10px",
      };
    }
  
    return baseStyle;
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#000" }}>Stall Booking Hall A</h1>
      <div style={layoutContainerStyle}>
        {/* Top Yellow Stalls */}
        <div style={rowStyle}>
          {stalls.slice(0, 24).map((stall) => (
           
            <div key={stall.id} style={StallStyle(stall.color)}
            onClick={() => handleStallClick(stall)}
            >
              {stall.id} {stall.title}
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div style={middleSectionStyle}>
          {/* Left Blue Stalls */}
          <div style={columnStyle}>
            {stalls.slice(24, 26).map((stall) => (
              <div key={stall.id} style={StallStyle(stall.color)}
              onClick={() => handleStallClick(stall)}
              >
                {stall.id}
              </div>
            ))}
          </div>

          {/* Inner White Stalls - 5 Blocks Division */}
          <div style={{ display: "flex", gap: "15px" }}>
            {/* Block 1: Top-Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(0, 3).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(3, 6).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2: Center-Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(6, 8).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(8, 10).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Center-Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(10, 12).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(12, 14).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Block 4: Top-Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(14, 16).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(16, 18).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Block 5: Far-Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(18, 20).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {innerStalls.slice(20, 22).map((stall) => (
                  <div key={stall.id} style={StallStyle(stall.color)}
                  onClick={() => handleStallClick(stall)}
                  >
                    {stall.id}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Blue Stalls */}
          <div style={columnStyle}>
            {stalls.slice(26, 28).map((stall) => (
              <div key={stall.id} style={StallStyle(stall.color)}
              onClick={() => handleStallClick(stall)}
              >
                {stall.id}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Green and Yellow Stalls */}
        <div style={rowStyle}>
          {stalls.slice(29).map((stall, index) => (
            <div
              key={stall.id ?? `no-id-${index}`}
              style={StallStyle(stall.color)}
              onClick={() => handleStallClick(stall)}
            >
              {stall.id || ""}
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      {showForm && selectedStall && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "400px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Register for Stall {selectedStall.id}</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Full Name:
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange(e, "fullName")}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Contact:
                </label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => handleInputChange(e, "contact")}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  E-mail:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Organizer:
                </label>
                <input
                  type="text"
                  value={formData.organizer}
                  onChange={(e) => handleInputChange(e, "organizer")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  City:
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange(e, "city")}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  State:
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange(e, "state")}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
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
            </form>
          </div>
        </div>
      )}
    </>
  );

  

}

<style>
  {`
    @media (max-width: 768px) {
      div[style*="display: flex"] {
        flex-direction: column;
        gap: 10px;
      }
      div[style*="flex: 1 1 30%"] {
        flex: 1 1 100%;
      }
      div[style*="gap: 5px"] {
        gap: 10px;
      }
      div[style*="display: flex; flexDirection: column"] {
        gap: 10px;
      }
      div[style*="flex-direction: column"] {
        display: block;
      }
    }
  `}
</style>
export default App;
