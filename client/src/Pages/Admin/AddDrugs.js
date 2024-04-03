import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";

function DrugForm() {
  const [drugName, setDrugName] = useState("");
  const [dosage, setDosage] = useState("");
  const [indication, setIndication] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSave = () => {
    const data = {
      drugName: drugName,
      dosage: dosage,
      indication: indication,
      dateOfIssue: dateOfIssue,
    };

    axios
      .post("http://localhost:5000/api/admin/AddDrugs", data)
      .then((response) => {
        console.log("Data saved successfully:", response.data);
        setDrugName("");
        setDosage("");
        setIndication("");
        setDateOfIssue("");
        setErrorMessage("");
        setSuccessMessage("Medicine is Successfully Added");
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        setErrorMessage("Failed to save data. Please try again.");
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8} lg={6} className="mt-5">
        <Paper
          style={{
            padding: "20px",
            marginTop: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            Add New Drug
          </Typography>
          {errorMessage && (
            <Alert severity="error" style={{ marginBottom: "20px" }}>
              {errorMessage}
            </Alert>
          )}
          <TextField
            label="Drug Name"
            variant="outlined"
            fullWidth
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Drug Dosage"
            variant="outlined"
            fullWidth
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Indication"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            value={indication}
            onChange={(e) => setIndication(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Date of Issue"
            type="date"
            variant="outlined"
            fullWidth
            value={dateOfIssue}
            onChange={(e) => setDateOfIssue(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={handleSave}
            style={{ marginBottom: "20px" }}
          >
            Save
          </Button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: "100%" }}
            >
              {successMessage}
            </Alert>
          </Snackbar>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DrugForm;
