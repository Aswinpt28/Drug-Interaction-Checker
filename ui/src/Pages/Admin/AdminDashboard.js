import React from "react";
import Sidebar from "../../components/sidebar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AdditionalContent from "../../components/AdditionalContent";

const AdminDashboard = () => {
  const containerStyle = {
    padding: "20px",
    marginTop: "20px",
  };

  const colorfulPaperStyle = {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    height: "100%",
    backgroundColor: "#f2f2f2",
  };

  const colorfulTypographyStyle = {
    color: "#3498db",
  };

  const colorfulListItemStyle = {
    backgroundColor: "#ecf0f1",
  };

  const patientList = [
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      diagnosis: "Hypertension",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      diagnosis: "Diabetes",
    },
  ];

  const doctorsList = [
    { id: 1, name: "Dr. Smith", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Johnson", specialization: "Endocrinologist" },
  ];

  const medicineList = [
    { id: 1, name: "Aspirin", dosage: "75mg", stock: 100 },
    { id: 2, name: "Metformin", dosage: "500mg", stock: 150 },
  ];

  return (
    <div>
      {/* <AppBar position="static" style={{ background: "white" }} elevation={0}>
        <Toolbar></Toolbar>
      </AppBar> */}

      <Sidebar />
      <Container maxWidth="md" style={containerStyle}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="p-4" style={colorfulPaperStyle}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                style={colorfulTypographyStyle}
              >
                Patient List
              </Typography>
              <List>
                {patientList.map((patient) => (
                  <ListItem key={patient.id} style={colorfulListItemStyle}>
                    <ListItemText
                      primary={patient.name}
                      secondary={`Age: ${patient.age} - Gender: ${patient.gender} - Diagnosis: ${patient.diagnosis}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="p-4" style={colorfulPaperStyle}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                style={colorfulTypographyStyle}
              >
                Doctors List
              </Typography>
              <List>
                {doctorsList.map((doctor) => (
                  <ListItem key={doctor.id} style={colorfulListItemStyle}>
                    <ListItemText
                      primary={doctor.name}
                      secondary={`Specialization: ${doctor.specialization}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" style={containerStyle}>
        <Paper elevation={3} className="p-4 mt-4" style={colorfulPaperStyle}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            style={colorfulTypographyStyle}
          >
            Medicine List
          </Typography>
          <List>
            {medicineList.map((medicine) => (
              <ListItem key={medicine.id} style={colorfulListItemStyle}>
                <ListItemText
                  primary={medicine.name}
                  secondary={`Dosage: ${medicine.dosage} - Stock: ${medicine.stock}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
      <div>
        <AdditionalContent />
      </div>
    </div>
  );
};

export default AdminDashboard;
