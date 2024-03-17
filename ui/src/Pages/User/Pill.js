import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer2";
import "./userStyles/inter.css";

const Pill = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("");
  const [imprint, setImprint] = useState("");
  const [results, setResults] = useState([]);

  const handleIdentifyPill = () => {
    // You can implement pill identification logic here
    // For demonstration purposes, I'm just setting some dummy results
    setResults(["Pill A", "Pill B", "Pill C"]);
  };

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
  return (
    <div>
      <Navbar
        isAuthenticated={userToken}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
      <Container className="d-flex flex-column align-items-center justify-content-center mt-customs">
        <Typography variant="h4" gutterBottom>
          Pill Identification
        </Typography>
        <div>
          <TextField
            label="Enter pill shape"
            variant="outlined"
            className="mb-3"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Enter pill color"
            variant="outlined"
            className="mb-3"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Enter pill imprint"
            variant="outlined"
            className="mb-3"
            value={imprint}
            onChange={(e) => setImprint(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleIdentifyPill}
        >
          Identify Pill
        </Button>

        {results.length > 0 && (
          <div className="mt-3">
            <Typography variant="h6">Possible Matches:</Typography>
            <ul>
              {results.map((pill, index) => (
                <li key={index}>{pill}</li>
              ))}
            </ul>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Pill;
