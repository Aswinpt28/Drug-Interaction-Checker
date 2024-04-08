import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { makeRequest } from "../../Axios";
import Divider from "@mui/material/Divider";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await makeRequest.get("meetings/meet");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <Container sx={{ mr: 9 }}>
      <Typography
        variant="h4"
        align="center"
        fontFamily="'Nunito', sans-serif"
        gutterBottom
        color={"#23386f"}
        sx={{ mb: 4, mt: 4 }}
      >
        Appointments
      </Typography>
      <Divider
        sx={{
          mb: 4,
          margin: "12px 0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Grid container spacing={2}>
        {appointments.map((appointment) => (
          <Grid item key={appointment._id} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", boxShadow: 3, borderRadius: 2 }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {`Doctor: ${
                      appointment.doctor
                        ? appointment.doctor.name
                        : "Unknown Doctor"
                    }`}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                  >{`Patient: ${
                    appointment.patient
                      ? appointment.patient.username
                      : "Unknown Patient"
                  }`}</Typography>
                </div>
                <div></div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminAppointments;
