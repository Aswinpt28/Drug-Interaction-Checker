import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./userStyles/inter.css";

const DrugInteractionChecker = () => {
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading status

  const handleCheckInteractions = async () => {
    setLoading(true);
    try {
      const url = `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${drug1}+${drug2}`;
      const response = await axios.get(url);
      const data = response.data;
      if (data && data.fullInteractionTypeGroup) {
        const interactions =
          data.fullInteractionTypeGroup[0].fullInteractionType.map(
            (interaction) => interaction.interactionPair[0].description
          );
        setInteractions(interactions);
      } else {
        setInteractions(["No interactions found."]);
      }
    } catch (error) {
      console.error("Error fetching drug interactions:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container className="d-flex flex-column align-items-center justify-content-center mt-customs">
        <Typography variant="h4" gutterBottom>
          Drug Interaction Checker
        </Typography>
        <div className="mb-3">
          <TextField
            label="Enter first drug name"
            variant="outlined"
            value={drug1}
            onChange={(e) => setDrug1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Enter second drug name"
            variant="outlined"
            value={drug2}
            onChange={(e) => setDrug2(e.target.value)}
          />
        </div>
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleCheckInteractions}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Checking..." : "Check Interactions"}
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
    </div>
  );
};

export default DrugInteractionChecker;
