import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";

const Interaction = () => {
  const [medication1, setMedication1] = useState("");
  const [medication2, setMedication2] = useState("");
  const [interactions, setInteractions] = useState([]);
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

  const apiKey = "P30dxdlyu6Cuhgi4s94o56DhEWziKaXvLQUekNQA";

  const checkDrugInteractions = async () => {
    try {
      const [medication1Data, medication2Data] = await Promise.all([
        fetchMedicationData(medication1),
        fetchMedicationData(medication2),
      ]);

      const interactionsData = findInteractions(
        medication1Data,
        medication2Data
      );

      if (interactionsData.length > 0) {
        setInteractions(interactionsData);
        setError(null);
      } else {
        setError(
          `No interactions found between ${medication1} and ${medication2}.`
        );
        setInteractions([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching drug interactions. Please try again.");
      setInteractions([]);
    }
  };

  const fetchMedicationData = async (medication) => {
    const response = await axios.get(
      `https://api.fda.gov/drug/label.json?api_key=${apiKey}&search=${medication}`
    );

    return response.data.results && response.data.results.length > 0
      ? response.data.results[0]
      : {};
  };

  const findInteractions = (medication1Data, medication2Data) => {
    const indications1 = medication1Data.indications_and_usage || [];
    const indications2 = medication2Data.indications_and_usage || [];

    const commonIndications = indications1.filter((indication) =>
      indications2.includes(indication)
    );

    if (commonIndications.length > 0) {
      return [
        `Potential interaction: Both medications are used for ${commonIndications.join(
          ", "
        )}.`,
      ];
    } else {
      return [];
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
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col className="mt-5" xs={12} md={6}>
            <Form>
              <TextField
                className="mt-5"
                label="Medication 1"
                variant="outlined"
                fullWidth
                value={medication1}
                onChange={(e) => setMedication1(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Medication 2"
                variant="outlined"
                fullWidth
                value={medication2}
                onChange={(e) => setMedication2(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <Button
                variant="outlined"
                color="inherit"
                onClick={checkDrugInteractions}
              >
                Check Interactions
              </Button>
            </Form>

            {error && <Alert variant="danger">{error}</Alert>}

            {interactions.length > 0 && (
              <div className="mt-3">
                <h5>Drug Interactions:</h5>
                <ul>
                  {interactions.map((interaction, index) => (
                    <li key={index}>{interaction}</li>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Interaction;
