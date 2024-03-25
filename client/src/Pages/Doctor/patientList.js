import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [viewedPatient, setViewedPatient] = useState(null);

  useEffect(() => {
    // Fetch patient data from the backend API
    const fetchPatients = async () => {
      try {
        const response = await axios.get("/api/patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatients();
  }, []); // Run this effect only once on component mount

  const toggleMedicalHistory = (patientId) => {
    if (viewedPatient === patientId) {
      setViewedPatient(null);
    } else {
      setViewedPatient(patientId);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Patients Page
      </Typography>
      <Grid container spacing={3}>
        {patients.map((patient) => (
          <Grid key={patient.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {patient.name}
                </Typography>
                <Typography variant="body1">
                  Age: {patient.age} | Gender: {patient.gender}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Condition: {patient.condition}
                </Typography>
                {viewedPatient === patient.id && (
                  <Typography variant="body2" color="textSecondary">
                    Medical History: {patient.medicalHistory}
                  </Typography>
                )}
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => toggleMedicalHistory(patient.id)}
              >
                {viewedPatient === patient.id
                  ? "Hide Medical History"
                  : "View Medical History"}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PatientsPage;
