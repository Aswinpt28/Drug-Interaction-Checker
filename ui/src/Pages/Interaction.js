import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import doc from "../assets/doctor.png";
import logo1 from "../assets/medical.png";
import logo2 from "../assets/preventive.png";
import logo3 from "../assets/microscope.png";
import logo4 from "../assets/cardiogram.png";
import logo5 from "../assets/pill.png";
import { useState } from "react";

const Interaction = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/login");
  };
  const logosWithText = [
    { logo: logo1, text: "Logo 1 Text" },
    { logo: logo2, text: "Logo 2 Text" },
    { logo: logo3, text: "Logo 3 Text" },
    { logo: logo4, text: "Logo 4 Text" },
    { logo: logo5, text: "Logo 5 Text" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const buttonTexts = [
    "Drugs",
    "New Drugs",
    "Medical News",
    "History",
    "Side Effect",
    "Alerts",
    "Dosage",
    "More",
  ];

  return (
    <div>
      <Navbar
        isAuthenticated={userToken}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
      <div
        style={{
          backgroundImage: `url(${doc})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "calc(70vh - 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
          marginTop: "65px",
        }}
      >
        <h1 style={{ marginTop: "45px", color: "#23408E" }}>
          Drugs and Conditions
        </h1>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          {logosWithText.map(({ logo, text }, index) => (
            <div
              key={index}
              style={{
                margin: "0 40px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  width: "75px",
                  height: "60px",
                  marginBottom: "10px",
                }}
              />
              <p style={{ color: "#000", margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
        <h2
          style={{ color: "#23408E", marginBottom: "20px", marginTop: "50px" }}
        >
          Browse by Site
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {buttonTexts.map((text, index) => (
            <button
              key={index}
              style={{
                margin: "0 10px",
                width: "250px",
                backgroundColor: "#23408E",
                color: "#fff",
                padding: "5px 20px",
                borderRadius: "30px",
                cursor: "pointer",
                border: "none",
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
              onClick={() => console.log(`${text} clicked`)}
            >
              {text}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: "20px", marginTop: "30px" }}>
          <input
            type="text"
            placeholder="Search Medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "250px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "10px",
              backgroundColor: "#23408E",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
        <h2
          style={{ color: "#23408E", marginBottom: "20px", marginTop: "50px" }}
        >
          About Us
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            marginLeft: "75px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "35%",
          }}
        >
          <h3 style={{ color: "#23408E" }}>
            Here’s What make us different from other competitors
          </h3>
          <p style={{ margin: "20px 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>
          <div>
            <h1 style={{ margin: "20px 0", color: "#0074d9" }}>
              200+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000+
            </h1>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgba(25, 69, 218, 0.05)",
            padding: "20px",
            marginRight: "75px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "35%",
          }}
        >
          <h4 style={{ textAlign: "justify", fontWeight: "normal" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Interaction;
