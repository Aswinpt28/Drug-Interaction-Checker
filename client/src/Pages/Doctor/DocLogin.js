import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { makeRequest } from "../../Axios";
import { useNavigate, Link } from "react-router-dom";

import DoctorIcon from "../../assets/doctor1.png"; // Import your doctor SVG icon

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !temporaryPassword) {
        setError("Please fill in all fields");
        return;
      }

      const response = await makeRequest.post("/doctors/login", {
        email,
        temporaryPassword,
      });

      alert(response.data.message);

      if (response.data.success) {
        navigate("/doctor/schedule");
      }

      setEmail("");
      setTemporaryPassword("");
      setError("");
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Failed to login");
    }
  };

  return (
    <Container maxWidth="sm">
      <Card
        style={{
          padding: "20px",
          marginTop: "150px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          backgroundColor: "rgba(32, 77, 226, 0.055)",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  margin: "0 auto", // Center the Avatar horizontally
                }}
              >
                <img
                  src={DoctorIcon}
                  alt="Doctor"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Avatar>
              <Typography>DOCTOR LOGIN</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                value={temporaryPassword}
                onChange={(e) => setTemporaryPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <Link to="/login" className="back-link">
                <Button variant="text" color="inherit">
                  User Login
                </Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleLogin}
                style={{ marginTop: "10px" }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Link to="/adminlogin" className="back-link">
                <Button variant="text" color="inherit">
                  Admin Login
                </Button>
              </Link>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  style={{ color: "red", marginTop: "10px" }}
                >
                  {error}
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginForm;
