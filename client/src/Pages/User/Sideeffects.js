import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import axios from "axios";

const App = () => {
  const [medicineName, setMedicineName] = useState("");
  const [sideEffects, setSideEffects] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/medicine/sideeffects?name=${medicineName}`
      );
      setSideEffects(response.data.sideEffects);
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Medicine not found");
      } else {
        setErrorMessage("Server Error");
      }
      setSideEffects([]);
    }
  };

  return (
    <Container style={{ marginTop: "150px", marginBottom: "135px" }}>
      <Typography variant="h4" gutterBottom>
        Search Medicine Side Effects
      </Typography>
      <TextField
        label="Medicine Name"
        variant="outlined"
        value={medicineName}
        onChange={(e) => setMedicineName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {errorMessage && (
        <Typography variant="body1" color="error">
          {errorMessage}
        </Typography>
      )}
      {sideEffects.length > 0 && (
        <div>
          <Typography variant="h6">Side Effects:</Typography>
          <ul>
            {sideEffects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default App;
