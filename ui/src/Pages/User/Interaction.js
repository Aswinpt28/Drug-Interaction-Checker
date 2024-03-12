import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DrugInteractionChecker = () => {
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");
  const [interactions, setInteractions] = useState([]);

  const handleCheckInteractions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/interactions/${drug1}/${drug2}`
      );
      console.log("Response data:", response.data);
      setInteractions(response.data.result || []);
    } catch (error) {
      console.error("Error fetching drug interactions:", error.message);
    }
  };

  return (
    <Container className="mt-5">
      <Typography variant="h4" gutterBottom>
        Drug Interaction Checker
      </Typography>
      <TextField
        label="Enter first drug name"
        variant="outlined"
        fullWidth
        className="mb-3"
        value={drug1}
        onChange={(e) => setDrug1(e.target.value)}
      />
      <TextField
        label="Enter second drug name"
        variant="outlined"
        fullWidth
        className="mb-3 mr-5"
        value={drug2}
        onChange={(e) => setDrug2(e.target.value)}
      />
      <Button
        variant="outlined"
        color="inherit"
        onClick={handleCheckInteractions}
      >
        Check Interactions
      </Button>

      {Array.isArray(interactions) && interactions.length > 0 && (
        <div className="mt-3">
          <Typography variant="h6">Interactions:</Typography>
          <ul>
            {interactions.map((interaction, index) => (
              <li key={index}>{interaction}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default DrugInteractionChecker;
