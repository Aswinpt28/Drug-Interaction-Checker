import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import axios from "axios";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sideEffects, setSideEffects] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:${searchTerm}`
      );

      // Extract side effects from the response (this may vary based on the API structure)
      const extractedSideEffects = response.data.results.map(
        (result) => result.patient.drug.openfda.brand_name
      );

      setSideEffects(extractedSideEffects);
      setError(null);
    } catch (err) {
      setError("Error fetching side effects. Please try again.");
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
                  <li key={index}>{effect}</li>
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
