import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { makeRequest } from "../../Axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const BookAppointmentPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await makeRequest.get("doctors/doc");
        if (!Array.isArray(response.data.doctors)) {
          console.error("Error: Doctors data is not an array");
          setError("Error: Doctors data is not in the expected format");
          return;
        }
        setDoctors(response.data.doctors);
        setLoading(false);
      } catch (error) {
        setError("Error fetching doctors");
        setLoading(false);
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const response = await makeRequest.get("meetings/meet");
        if (!Array.isArray(response.data)) {
          console.error("Error: Appointments data is not an array");
          setError("Error: Appointments data is not in the expected format");
          return;
        }
        setAppointments(response.data);
      } catch (error) {
        setError("Error fetching appointments");
        console.error("Error fetching appointments:", error);
      }
    };

    fetchDoctors();
    fetchAppointments();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await makeRequest.post("book/addappointments", {
        doctor: selectedDoctor,
        date,
        time,
        meeting: `/video?roomID=${Date.now()}`,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to book appointment");
      console.error("Error booking appointment:", error);
    }
  };

  const goToMeeting = (link) => {
    navigate(link);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: "120px" }}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "#23408E", marginBottom: "20px" }}
      >
        Book Appointment
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          select
          label="Doctor"
          variant="outlined"
          fullWidth
          margin="normal"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          sx={{ marginBottom: "20px" }}
        >
          {doctors.map((doctor) => (
            <MenuItem key={doctor._id} value={doctor._id}>
              {doctor.name} - {doctor.specialization}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="Time"
          type="time"
          variant="outlined"
          fullWidth
          margin="normal"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          sx={{ marginBottom: "20px" }}
        />
        <Button
          type="submit"
          variant="outlined"
          color="inherit"
          sx={{ marginTop: "20px" }}
        >
          Book Appointment
        </Button>
      </form>
      {message && (
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginTop: "20px" }}
        >
          {message}
        </Typography>
      )}
      <Typography
        variant="h4"
        style={{
          marginTop: "50px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        My Appointments
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {appointments.map((appointment) => (
          <Card
            key={appointment._id}
            variant="outlined"
            sx={{
              minWidth: "250px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "16px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {appointment.doctor.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {dayjs(appointment.date).format("MMMM D, YYYY")} -{" "}
                {dayjs(appointment.time, "HH:mm").format("h:mm A")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="error">
                Cancel
              </Button>
              <Button></Button>
              <Button
                size="small"
                onClick={() => {
                  goToMeeting(appointment.meeting);
                }}
                color="primary"
              >
                Join
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default BookAppointmentPage;
