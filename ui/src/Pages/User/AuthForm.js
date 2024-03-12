import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import "./AuthForm.css";
import LogoImage from "../../assets/Group 13.png";
import backgroundImage from "../../assets/hospital.png";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const showAlert = (message) => {
    alert(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUpMode
      ? "http://localhost:3000/auth/register"
      : "http://localhost:3000/auth/user/login";

    try {
      const response = await axios.post(url, { username, email, password });

      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        localStorage.setItem("userToken", response.data.token);
        navigate("/");
      } else {
        console.error(response.data.message);
        showAlert(response.data.message);
      }
    } catch (error) {
      console.error("Error during Axios request:", error);
      showAlert("Error during Axios request");
    }
  };

  return (
    <Container component="main" className="mt-5 p-3" maxWidth="lg">
      <CssBaseline />
      <Paper
        elevation={3}
        className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={LogoImage} alt="Logo" className="logo" />
        <Grid container>
          <Grid item xs={12}>
            <div className="forms-container">
              <div className="signin-signup">
                <form onSubmit={handleSubmit} className="sign-in-form">
                  <Typography variant="h5">Sign in</Typography>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" variant="outlined" color="inherit">
                    Login
                  </Button>
                </form>

                <form onSubmit={handleSubmit} className="sign-up-form">
                  <Typography variant="h5">Sign up</Typography>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" variant="outlined" color="inherit">
                    Sign up
                  </Button>
                </form>

                <Link to="/admin" className="admin-link">
                  <Button variant="text" color="inherit">
                    Admin Login
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <Typography variant="h6">New to our community?</Typography>
                  <Typography variant="body2">
                    Discover a world of possibilities! Join us and explore a
                    vibrant community where ideas flourish and connections
                    thrive.
                  </Typography>
                  <Button
                    fullWidth
                    className="btn transparent"
                    color="inherit"
                    onClick={handleToggleMode}
                  >
                    Sign up
                  </Button>
                </div>
              </div>

              <div className="panel right-panel">
                <div className="content">
                  <Typography variant="h6">
                    One of Our Valued Members
                  </Typography>
                  <Typography variant="body2">
                    Thank you for being part of our community. Your presence
                    enriches our shared experiences. Let's continue this journey
                    together!
                  </Typography>
                  <Button
                    fullWidth
                    className="btn transparent"
                    color="inherit"
                    onClick={handleToggleMode}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AuthForm;
