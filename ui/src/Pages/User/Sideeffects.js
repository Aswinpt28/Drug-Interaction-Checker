import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Footer from "../../components/Footer2";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./side.css";
import doc from "../../assets/doctor.png";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("Paracetamol");
  const [sideEffects, setSideEffects] = useState([]);
  const [error, setError] = useState(null);
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

  const handleSearch = async () => {
    try {
      const apiKey = "P30dxdlyu6Cuhgi4s94o56DhEWziKaXvLQUekNQA";

      const response = await axios.get(
        `https://api.fda.gov/drug/event.json?api_key=${apiKey}&search=patient.drug.medicinalproduct:${searchTerm}`
      );

      if (response.data.results && response.data.results.length > 0) {
        const firstResult = response.data.results[0];
        const reactions = firstResult.patient?.reaction || [];

        if (reactions.length > 0) {
          const extractedSideEffects = reactions.map((reaction) => {
            return {
              sideEffect: reaction.reactionmeddrapt || "Unknown",
              occurrences: reaction.count || 0,
              seriousness: reaction.seriousness || "Not specified",
              dateOfOnset:
                reaction.patient?.reactionmeddrapt || "Not specified",
              // Add more relevant fields as needed
            };
          });

          setSideEffects(extractedSideEffects);
          setError(null);
        } else {
          setError(
            "No adverse events (side effects) found for the given medicine name."
          );
          setSideEffects([]);
        }
      } else {
        setError("No adverse events found for the given medicine name.");
        setSideEffects([]);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching adverse events. Please try again.");
      setSideEffects([]);
    }
  };

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
        <Container
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            style={{
              marginBottom: "8px",
            }}
            label="Enter Medicine Name"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outlined" color="inherit" onClick={handleSearch}>
            Search
          </Button>

          {error && <Alert variant="danger">{error}</Alert>}

          {sideEffects.length > 0 && (
            <div className="mt-3">
              <h5>Side Effects:</h5>
              <ul>
                {sideEffects.map((effect, index) => (
                  <li key={index}>
                    <strong>{effect.sideEffect}</strong> - Occurrences:{" "}
                    {effect.occurrences}, Seriousness: {effect.seriousness},
                    Date of Onset: {effect.dateOfOnset}
                    {/* Add more details as needed */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SearchForm;
