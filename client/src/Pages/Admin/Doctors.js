import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import { FaUserMd } from "react-icons/fa";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newDoctorData, setNewDoctorData] = useState({
    name: "",
    specialization: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/doctors/doc"
        );
        setDoctors(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDoctorData({
      ...newDoctorData,
      [name]: value,
    });
  };

  const handleAddDoctor = async () => {
    try {
      await axios.post("http://localhost:5000/api/doctors/add", newDoctorData);
      handleCloseModal();
      // Refresh the doctor list after adding a new doctor
      const response = await axios.get("http://localhost:5000/api/doctors/doc");
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <div>
      <Container style={{ marginRight: "100px" }}>
        <Divider style={{ margin: "16px 0" }} />
        <Button
          variant="outlined"
          color="inherit"
          align="center"
          gutterBottom
          onClick={handleOpenModal}
        >
          Add New Doctors
        </Button>
        <Divider style={{ margin: "16px 0" }} />
        <Grid container spacing={3}>
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} key={doctor._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {doctor.name}
                  </Typography>
                  <Divider />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Specialization: {doctor.specialization}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Email: {doctor.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Phone: {doctor.phoneNumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            minWidth: 400,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
            <FaUserMd size={24} style={{ marginRight: 8 }} /> Add New Doctor
          </Typography>
          <div>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={newDoctorData.name}
              onChange={handleChange}
              margin="normal"
              sx={{ marginBottom: 2 }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Specialization"
              name="specialization"
              value={newDoctorData.specialization}
              onChange={handleChange}
              margin="normal"
              sx={{ marginBottom: 2 }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={newDoctorData.email}
              onChange={handleChange}
              margin="normal"
              sx={{ marginBottom: 2 }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={newDoctorData.phoneNumber}
              onChange={handleChange}
              margin="normal"
              sx={{ marginBottom: 2 }}
            />
          </div>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleAddDoctor}
            sx={{ textTransform: "none" }}
          >
            Add Doctor
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DoctorList;
