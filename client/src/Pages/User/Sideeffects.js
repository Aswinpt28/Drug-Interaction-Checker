import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeRequest } from "../../Axios";

const App = () => {
  const [medicineName, setMedicineName] = useState("");
  const [sideEffects, setSideEffects] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await makeRequest.get("medicine/sideeffects", {
        params: {
          name: medicineName,
        },
      });
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
    <Container sx={{ marginTop: "130px", marginBottom: "103px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
        <Typography variant="h4" gutterBottom style={{ color: "#23408E" }}>
          About Side Effects
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "24px" }}>
          Side effects are unintended and often undesired effects that occur as
          a result of using a particular medication. It's essential to be aware
          of these side effects to ensure safe and effective use of medication.
          If you experience any side effects, consult your healthcare provider.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
        <Typography
          variant="h5"
          gutterBottom
          style={{ fontWeight: "lighter", fontSize: "12" }}
        >
          Enter the name of the medicine to find its side effects.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <TextField
            label="Medicine Name"
            variant="outlined"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            sx={{ marginRight: "8px" }}
          />
          <Button variant="outlined" color="inherit" onClick={handleSearch}>
            Search
          </Button>
        </Box>
        {errorMessage && (
          <Typography variant="body1" color="error" sx={{ marginTop: "12px" }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
      {sideEffects.length > 0 && (
        <Box
          sx={{
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            margin: "20px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#333", marginBottom: "10px" }}
          >
            Side Effects:
          </Typography>
          <List sx={{ padding: 0 }}>
            {sideEffects.map((effect, index) => (
              <ListItem
                key={index}
                sx={{
                  borderBottom: "1px solid #ddd",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <ListItemText primary={effect} sx={{ paddingLeft: 0 }} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
};

export default App;
