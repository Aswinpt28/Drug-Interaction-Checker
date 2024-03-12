import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AdditionalContent = () => {
  const containerStyle = {
    padding: "20px",
    marginTop: "20px",
  };

  const colorfulPaperStyle = {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    height: "100%",
    backgroundColor: "#f2f2f2", // Light gray background color
  };

  const colorfulTypographyStyle = {
    color: "#3498db", // Blue text color
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <Paper elevation={3} className="p-4" style={colorfulPaperStyle}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={colorfulTypographyStyle}
        >
          Additional Content
        </Typography>
        {/* Add your content for the additional container here */}
      </Paper>
    </Container>
  );
};

export default AdditionalContent;
