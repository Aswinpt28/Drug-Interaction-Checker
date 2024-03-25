import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

function App() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    fetchDoctors();
    fetchAppointments(); // Fetch appointments when component mounts
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/doctors/doc");
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/book/fetchappointments"
      );
      setBookedAppointments(response.data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleBookAppointment = async () => {
    if (!selectedDoctor || !selectedDate || !patientName) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill all fields.");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/book/addappointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            doctor: selectedDoctor,
            date: selectedDate,
            patient: patientName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to book appointment.");
      }

      // Simulating saving appointment to the frontend
      const newAppointment = {
        doctor: selectedDoctor,
        date: selectedDate,
        patient: patientName,
      };
      setBookedAppointments([...bookedAppointments, newAppointment]);

      setSnackbarSeverity("success");
      setSnackbarMessage("Appointment booked successfully.");
      setSnackbarOpen(true);

      // Reset form fields
      setSelectedDoctor("");
      setSelectedDate("");
      setPatientName("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to book appointment. Please try again.");
      setSnackbarOpen(true);
    }
  };
  const handleEditAppointment = async (id) => {
    try {
      const appointmentToEdit = bookedAppointments.find(
        (appointment) => appointment.id === id
      );

      setSelectedDoctor(appointmentToEdit.doctor);
      setSelectedDate(appointmentToEdit.date);
      setPatientName(appointmentToEdit.patient);
    } catch (error) {
      console.error("Error editing appointment:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to edit appointment. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/book/deleteappointments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        const updatedAppointments = bookedAppointments.filter(
          (appointment) => appointment.id !== id
        );

        setBookedAppointments(updatedAppointments);

        setSnackbarSeverity("success");
        setSnackbarMessage("Appointment deleted successfully.");
        setSnackbarOpen(true);
      } else {
        throw new Error("Failed to delete appointment.");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to delete appointment. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  console.log(bookedAppointments);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Appointment
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {doctor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {doctor.specialization}
                </Typography>
                <Button
                  onClick={() => setSelectedDoctor(doctor.name)}
                  variant={
                    selectedDoctor === doctor.name ? "contained" : "outlined"
                  }
                  sx={{ mt: 2 }}
                >
                  Select Doctor
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {selectedDoctor && (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Appointment Date
                  </Typography>
                  <TextField
                    id="date"
                    type="datetime-local"
                    value={selectedDate}
                    onChange={handleDateChange}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Patient Information
                  </Typography>
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    fullWidth
                    style={{ marginBottom: "1rem" }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBookAppointment}
                    fullWidth
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
        {bookedAppointments?.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Booked Appointments
            </Typography>
            {bookedAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                variant="outlined"
                style={{ marginBottom: "1rem" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {`${appointment.doctor}, ${appointment.date}`}
                  </Typography>
                  <Typography variant="body1">
                    Patient: {appointment.patient}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => handleEditAppointment(appointment.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteAppointment(appointment.id)}
                  >
                    Cancel
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>
        )}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
