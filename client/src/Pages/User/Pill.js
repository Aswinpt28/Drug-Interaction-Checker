import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Tabs, Tab } from "@mui/material";

const PillTracker = () => {
  const [imprint, setImprint] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [matchedPills, setMatchedPills] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // State to track if search has been performed

  const handleSubmit = async () => {
    try {
      const queryParams = [];
      if (imprint) queryParams.push(`imprint=${encodeURIComponent(imprint)}`);
      if (color) queryParams.push(`color=${encodeURIComponent(color)}`);
      if (shape) queryParams.push(`shape=${encodeURIComponent(shape)}`);
      const queryString = queryParams.join("&");

      const response = await fetch(
        `http://localhost:5000/api/pills/getdrugandimageurl?${queryString}`
      );
      const data = await response.json();
      setMatchedPills(data);
      setSearchPerformed(true); // Set searchPerformed to true after search
    } catch (error) {
      console.error("Error fetching pill data:", error);
    }
  };

  const handleSearchAgain = () => {
    // Reset the state and perform a new search
    setImprint("");
    setColor("");
    setShape("");
    setMatchedPills([]);
    setSearchPerformed(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Container>
        <Typography
          style={{ marginTop: "100px" }}
          variant="h4"
          align="center"
          gutterBottom
        >
          Pill Identifier
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Search by imprint, shape, or color
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Use the pill finder to identify medications by visual appearance or
          medicine name.
        </Typography>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!searchPerformed && (
            <Card style={{ marginBottom: "20px", width: "800px" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Conditionally render text fields based on searchPerformed */}
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label="Imprint"
                    variant="outlined"
                    value={imprint}
                    onChange={(e) => setImprint(e.target.value)}
                    style={{ marginBottom: "10px", width: "200%" }}
                  />
                  <TextField
                    label="Color"
                    variant="outlined"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ marginBottom: "10px", width: "200%" }}
                  />
                  <TextField
                    label="Shape"
                    variant="outlined"
                    value={shape}
                    onChange={(e) => setShape(e.target.value)}
                    style={{ marginBottom: "10px", width: "200%" }}
                  />
                </div>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </CardContent>
            </Card>
          )}

          {searchPerformed && (
            <div style={{ marginTop: "20px" }}>
              <Tabs value={1} centered>
                <Tab label="Search Again" onClick={handleSearchAgain} />
              </Tabs>
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {matchedPills.map((pill, index) => (
              <Card
                key={index}
                style={{ width: "200px", marginBottom: "20px" }}
              >
                <CardContent>
                  <Typography variant="h6">Pill Details</Typography>
                  <Typography>Drug: {pill.drug}</Typography>
                  <div
                    style={{
                      marginTop: "10px",
                      maxHeight: "150px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={pill.imageUrl}
                      alt={`Pill ${pill.imprint} is ${pill.drug}`}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Render the tab for searching again if search has been performed */}
        </div>
      </Container>
    </div>
  );
};

export default PillTracker;
