import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  CircularProgress,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import "./userStyles/newdrugs.css";

const NewDrugs = () => {
  const [drugsData, setDrugsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrugsData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/FetchDrugs"
        );
        setDrugsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching drugs data:", error);
        setError("Error fetching drugs data");
        setLoading(false);
      }
    };

    fetchDrugsData();
  }, []);

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        style={{ marginTop: "80px" }}
      >
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant="h4" gutterBottom className="title">
            New Drug Approvals
          </Typography>
          {loading && <CircularProgress className="loader" />}{" "}
          {/* Show loading indicator */}
          {error && <Alert severity="error">{error}</Alert>}{" "}
          {/* Show error message */}
          {/* Render the fetched drugs data in cards */}
          {drugsData.map((drug, index) => (
            <Card key={index} className="card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Drug Name: {drug.drugName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Dosage: {drug.dosage}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Indication: {drug.indication}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Date of Issue:{" "}
                  {new Date(drug.dateOfIssue).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default NewDrugs;
