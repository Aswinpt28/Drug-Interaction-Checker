import React, { useState, useEffect } from "react";
import { makeRequest } from "../../Axios";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppointmentsComponent = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await makeRequest.get("meetings/meet");
        setAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleLogout = () => {
    navigate("/doclog");
  };

  const goToMeeting = (link) => {
    navigate(link);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "20px", position: "relative" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
            textDecoration: "underline",
          }}
        >
          Appointments
        </Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={handleLogout}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Logout
        </Button>
      </div>
      {loading ? (
        <Typography
          variant="body1"
          style={{ textAlign: "center", color: "#666" }}
        >
          Loading...
        </Typography>
      ) : (
        <div>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#555",
            }}
          >
            Welcome Dr. {appointments.length > 0 && appointments[0].doctor.name}
          </Typography>
          <Grid container spacing={3}>
            {appointments.map((appointment, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  style={{
                    height: "100%",
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      gutterBottom
                      style={{ fontWeight: "bold" }}
                    >
                      Appointment Details
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Time:</strong> {appointment.time}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Patient:</strong>{" "}
                      {appointment.patient
                        ? appointment.patient.username
                        : "N/A"}
                    </Typography>
                    <Button
                      size="small"
                      onClick={() => {
                        goToMeeting(appointment.meeting);
                      }}
                      color="primary"
                    >
                      Join
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default AppointmentsComponent;
