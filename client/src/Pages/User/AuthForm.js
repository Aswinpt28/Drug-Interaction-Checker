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
import "./userStyles/AuthForm.css";
import LogoImage from "../../assets/Group 13.png";
import backgroundImage from "../../assets/hospital.png";
import { makeRequest } from "../../Axios";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && user.user_type === "user") {
      navigate("/");
    }
  }, [navigate, user]);

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const showAlert = (message) => {
    alert(message);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeRequest.post("/auth/user/login", {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setUser(response.data);
      } else {
        console.error(response.data.message);
        showAlert(response.data.message);
      }
    } catch (error) {
      console.error("Error during sign-in Axios request:", error);
      showAlert("Error during sign-in Axios request");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeRequest.post("/auth/register", {
        username,
        email,
        password,
        profession,
        phonenumber,
        role: "user", // Ensure to set the role for user registration
      });

      if (response.status === 201) {
        // Registration successful
        showAlert("Registration successful");
        // Redirect the user after successful registration
        navigate("/");
      } else {
        // Registration failed
        console.error(response.data.message);
        showAlert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-up Axios request:", error);
      showAlert("Error during sign-up. Please try again.");
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
                <form
                  onSubmit={
                    isSignUpMode ? handleSignUpSubmit : handleSignInSubmit
                  }
                  className={isSignUpMode ? "sign-up-form" : "sign-in-form"}
                >
                  <Typography variant="h5">
                    {isSignUpMode ? "Sign up" : "Sign in"}
                  </Typography>
                  {isSignUpMode && (
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
                  )}
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
                  {isSignUpMode && (
                    <>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="profession"
                        label="Profession"
                        type="text"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phoneNumber"
                        label="Phone Number"
                        type="number"
                        value={phonenumber}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </>
                  )}
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" variant="outlined" color="inherit">
                    {isSignUpMode ? "Sign up" : "Sign in"}
                  </Button>
                </form>
                <Button onClick={handleToggleMode}>
                  {isSignUpMode
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign up"}
                </Button>
                <Link to="/adminlogin" className="admin-link">
                  <Button variant="text" color="inherit">
                    Admin Login
                  </Button>
                </Link>
                <Link to="/doclog" className="admin-link">
                  <Button variant="text" color="inherit">
                    Doctor Login
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
