import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  Box,
} from "@mui/material";
import { Alert } from "@mui/material";
import { makeRequest } from "../../Axios";

const App = () => {
  const [medicineInputs, setMedicineInputs] = useState([""]);
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddMedicine = () => {
    setMedicineInputs([...medicineInputs, ""]);
  };

  const handleChange = (index, event) => {
    const newMedicines = [...medicineInputs];
    newMedicines[index] = event.target.value;
    setMedicineInputs(newMedicines);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckInteractions = async () => {
    try {
      const response = await makeRequest.post("interaction/check", {
        medicines: medicineInputs.filter((medicine) => medicine.trim() !== ""),
      });
      setSymptoms(response.data.symptoms);
    } catch (error) {
      setError(error.response.data.error);
      setOpen(true);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{ marginTop: "130px", textAlign: "center", width: "500px" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ marginBottom: "20px", color: "#23408E" }}
      >
        Drug Interaction Checker
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginBottom: "24px" }}
      >
        Enter the names of the medicines you are currently taking in the fields
        below. Our interaction checker will analyze your medications to identify
        potential drug interactions and provide information about possible
        symptoms.
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginBottom="20px"
      >
        {medicineInputs.map((medicine, index) => (
          <TextField
            key={index}
            label={`Medicine ${index + 1}`}
            value={medicine}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
            margin="normal"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              width: "200px",
            }}
          />
        ))}
      </Box>
      <Button
        variant="text"
        color="secondary"
        onClick={handleAddMedicine}
        style={{ marginBottom: "20px" }}
      >
        Add Medicine
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        variant="outlined"
        color="inherit"
        onClick={handleCheckInteractions}
        style={{ marginBottom: "20px" }}
      >
        Check Interactions
      </Button>
      {symptoms && (
        <Typography
          variant="body1"
          gutterBottom
          style={{ marginBottom: "20px" }}
        >
          Symptoms: {symptoms}
        </Typography>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
