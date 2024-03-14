import React from "react";
import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Schedule, People, MedicalServices } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewMedicalHistory = () => {
    navigate("/patient"); // Navigate to the "Patient" page
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Doctor Dashboard
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome, Dr. John Doe
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Schedule
                  fontSize="large"
                  color="primary"
                  style={{ marginBottom: "20px" }}
                />
                <Typography variant="h6" gutterBottom>
                  Scheduled Meetings
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Upcoming meeting with your patients.
                </Typography>
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                href="#schedule-meeting"
              >
                Meetings
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <People
                  fontSize="large"
                  color="secondary"
                  style={{ marginBottom: "20px" }}
                />
                <Typography variant="h6" gutterBottom>
                  View Patient List
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  View and manage your patient list.
                </Typography>
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleViewMedicalHistory}
              >
                View Patients
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <MedicalServices
                  fontSize="large"
                  color="info"
                  style={{ marginBottom: "20px" }}
                />
                <Typography variant="h6" gutterBottom>
                  Medical Services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Access and manage medical services.
                </Typography>
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                color="info"
                href="#medical-services"
              >
                Services
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
