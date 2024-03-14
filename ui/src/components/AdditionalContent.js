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
    backgroundColor: "#f2f2f2",
  };

  const colorfulTypographyStyle = {
    color: "#3498db",
  };

  const profile = {
    name: "John Doe",
    age: 30,
    description: "Passionate about healthcare and technology.",
  };

  return (
    <div className="d-flex justify-content-end">
      <Container maxWidth="sm" style={containerStyle}>
        <Paper elevation={3} className="p-4" style={colorfulPaperStyle}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            style={colorfulTypographyStyle}
          >
            Profile
          </Typography>
          <Typography variant="h6" gutterBottom>
            Name: {profile.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Age: {profile.age}
          </Typography>
          <Typography variant="body1">{profile.description}</Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default AdditionalContent;
