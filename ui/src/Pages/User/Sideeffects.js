import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import axios from "axios";
import Footer from "../../components/Footer2";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./userStyles/side.css";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
        `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:${searchTerm}&limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (
        response.data &&
        response.data.results &&
        response.data.results.length > 0
      ) {
        const adverseEvents = response.data.results.map((result) => ({
          reactions: result.patient.reaction
            .map((reaction) => reaction.reactionmeddrapt)
            .join(", "), // Join reactions into a string
        }));

        setSideEffects(adverseEvents);
        setError(null);
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
      <Container maxWidth="md" className="mt-customs">
        <Box mt={5}>
          <Typography variant="h4" align="center" gutterBottom>
            Adverse Events Search
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={3}
          >
            <TextField
              label="Enter Medicine Name"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ ml: 2 }}
            >
              Search
            </Button>
          </Box>
          {error && (
            <Alert severity="error" sx={{ mt: 3 }}>
              {error}
            </Alert>
          )}
          {sideEffects.length > 0 && (
            <Box mt={3}>
              <Typography variant="h6">Adverse Events:</Typography>
              <ul>
                {sideEffects.map((event, index) => (
                  <li key={index}>{event.reactions}</li>
                ))}
              </ul>
            </Box>
          )}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchForm;
