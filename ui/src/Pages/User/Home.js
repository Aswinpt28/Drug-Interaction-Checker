import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer2";
import doc from "../../assets/hospital.png";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "../../assets/medical.png";
import logo2 from "../../assets/preventive.png";
import logo3 from "../../assets/microscope.png";
import logo4 from "../../assets/cardiogram.png";
import logo5 from "../../assets/pill.png";
import Button from "@mui/material/Button";

const Home = () => {
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
    { logo: logo1, text: "1" },
    { logo: logo2, text: "2" },
    { logo: logo3, text: "3" },
    { logo: logo4, text: "4" },
    { logo: logo5, text: "5" },
  ];

  const buttonTexts = [
    "Drugs",
    "New Drugs",
    "Medical News",
    "History",
    "Alerts",
  ];

  return (
    <div>
      <Navbar
        isAuthenticated={userToken}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />

      <Container fluid>
        <div
          style={{
            backgroundImage: `url(${doc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "calc(60vh - 60px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            marginTop: "65px",
            padding: "40px 0",
          }}
        >
          <h1 style={{ color: "#23408E", fontSize: "2.5rem" }}>
            Drugs and Conditions
          </h1>

          <Row className="justify-content-center mt-4">
            {logosWithText.map(({ logo, text }, index) => (
              <Col key={index}>
                <div
                  style={{
                    margin: "0 20px",
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    padding: "15px",
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
                  <p style={{ color: "#000", margin: 0, fontSize: "1.2rem" }}>
                    {text}
                  </p>
                </div>
              </Col>
            ))}
          </Row>

          <h2
            style={{
              color: "#23408E",
              marginBottom: "20px",
              marginTop: "50px",
              fontSize: "2rem",
            }}
          >
            Browse by Site
          </h2>

          <Row className="justify-content-center">
            {buttonTexts.map((text, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={2}>
                <Button
                  style={{
                    margin: "0 10px",
                    width: "200px",
                    // backgroundColor: "#23408E",
                    color: "#2c2c2c",
                    // padding: "10px 20px",
                    // borderRadius: "30px",
                    cursor: "pointer",
                    border: "none",
                    fontSize: "15px",
                  }}
                  variant="text"
                  color="inherit"
                  onClick={() => console.log(`${text} clicked`)}
                >
                  {text}
                </Button>
              </Col>
            ))}
          </Row>

          <h2
            style={{
              color: "#23408E",
              marginBottom: "20px",
              marginTop: "50px",
              fontSize: "2rem",
            }}
          >
            About Us
          </h2>
        </div>

        <Row className="justify-content-between" style={{ padding: "20px" }}>
          <Col xs={12} sm={6} lg={5}>
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ color: "#23408E", fontSize: "1.8rem" }}>
                What Sets Us Apart
              </h3>
              <p style={{ margin: "20px 0", fontSize: "1.2rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
              <div>
                <h1
                  style={{
                    margin: "20px 0",
                    color: "#0074d9",
                    fontSize: "2rem",
                  }}
                >
                  200+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000+
                </h1>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={5}>
            <div
              style={{
                backgroundColor: "rgba(25, 69, 218, 0.05)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4
                style={{
                  textAlign: "justify",
                  fontWeight: "normal",
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
