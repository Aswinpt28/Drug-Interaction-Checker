import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer2";
import doc from "../../assets/hospital2.png";
import { Container, Grid, Button, Typography } from "@mui/material";

import logo1 from "../../assets/medical.png";
import logo2 from "../../assets/preventive.png";
import logo3 from "../../assets/microscope.png";
import logo4 from "../../assets/cardiogram.png";
import logo5 from "../../assets/pill.png";
import { AuthContext } from "../../Context/AuthContext";
import { makeRequest } from "../../Axios";

const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    makeRequest.get("/auth/logout").then(() => {
      setUser(null);
      navigate("/login");
    });
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleDrugsClick = () => {
    navigate("/user/details/:id");
  };

  const handleNewDrugsClick = () => {
    navigate("/user/newdrugs");
  };

  const handleMedicalNewsClick = () => {
    navigate("/user/medicalnews");
  };

  const handleHistoryClick = () => {
    navigate("/user/history");
  };

  const handleAlertsClick = () => {
    navigate("/user/alerts");
  };

  const handleCheck = () => {
    navigate("/user/check");
  };
  const handleAppoint = () => {
    navigate("/user/appointment");
  };
  const handlePill = () => {
    navigate("/user/pill");
  };
  const handleSide = () => {
    navigate("/user/side");
  };

  const logosWithText = [
    { logo: logo1, text: "Interaction ", onClick: handleCheck },
    { logo: logo2, text: "Pill Identifier", onClick: handlePill },
    { logo: logo3, text: "Side Effects", onClick: handleSide },
    { logo: logo4, text: "New Drugs", onClick: handleNewDrugsClick },
    { logo: logo5, text: "Appointment", onClick: handleAppoint },
  ];

  const buttonTexts = [
    { text: "Drugs", onClick: handleDrugsClick },
    { text: "New Drugs", onClick: handleNewDrugsClick },
    { text: "Medical News", onClick: handleMedicalNewsClick },
    { text: "History", onClick: handleHistoryClick },
    { text: "Alerts", onClick: handleAlertsClick },
  ];

  return (
    <div>
      <Navbar
        isAuthenticated={user}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />

      <Container>
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
          <Typography variant="h3" style={{ color: "#23408E" }}>
            Drugs and Conditions
          </Typography>

          <Grid
            container
            justifyContent="center"
            spacing={4}
            style={{ marginTop: "20px" }}
          >
            {logosWithText.map(({ logo, text, onClick }, index) => (
              <Grid item key={index}>
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
                  onClick={onClick}
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
                  <Typography variant="subtitle1" style={{ color: "#000" }}>
                    {text}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            style={{ color: "#23408E", marginTop: "50px" }}
          >
            Browse by Site
          </Typography>

          <Grid
            container
            justifyContent="center"
            spacing={4}
            style={{ marginTop: "20px" }}
          >
            {buttonTexts.map(({ text, onClick }, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                <Button
                  sx={{
                    width: "100%",
                    color: "#2c2c2c",
                    fontSize: "15px",
                    "@media (max-width: 600px)": {
                      fontSize: "12px",
                      padding: "10px",
                    },
                  }}
                  variant="outlined"
                  color="inherit"
                  onClick={onClick}
                >
                  {text}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            style={{ color: "#23408E", marginTop: "50px" }}
          >
            About Us
          </Typography>
        </div>

        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "20px" }}
        >
          <Grid item xs={12} sm={6} lg={5}>
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h5" style={{ color: "#23408E" }}>
                What Sets Us Apart
              </Typography>
              <Typography variant="body1" style={{ margin: "20px 0" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Typography>
              <Typography variant="h3" style={{ color: "#0074d9" }}>
                200+
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000+
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} lg={5}>
            <div
              style={{
                backgroundColor: "rgba(25, 69, 218, 0.05)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="body1"
                style={{ textAlign: "justify", fontSize: "1.2rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
