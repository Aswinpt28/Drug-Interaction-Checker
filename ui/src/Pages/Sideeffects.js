import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import axios from "axios";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("Paracetamol");
  const [sideEffects, setSideEffects] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = "P30dxdlyu6Cuhgi4s94o56DhEWziKaXvLQUekNQA"; // Replace with your actual OpenFDA API key

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
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Form>
            <TextField
              label="Enter Medicine Name"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="primary" onClick={handleSearch} fullWidth>
              Search Side Effects
            </Button>
          </Form>

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
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
