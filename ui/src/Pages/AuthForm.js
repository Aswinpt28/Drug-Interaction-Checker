import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import "./AuthForm.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const {
    handleSubmit: loginSubmit,
    control: loginControl,
    formState: { errors: loginErrors },
  } = useForm();

  const {
    handleSubmit: signupSubmit,
    control: signupControl,
    formState: { errors: signupErrors },
  } = useForm();

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

  const handleLoginSubmit = async (data) => {
    const url = "http://localhost:8000/auth/user/login";

    try {
      const response = await axios.post(url, data);

      if (response.status === 200 || response.status === 201) {
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

  const handleSignupSubmit = async (data) => {
    const url = "http://localhost:8000/auth/register";

    try {
      const response = await axios.post(url, data);

      if (response.status === 200 || response.status === 201) {
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
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="logo-container-left">
        <img
          src={require("../assets/Group 13.png")}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={loginSubmit(handleLoginSubmit)}
            className="sign-in-form"
          >
            <h2 className="title">Sign in</h2>
            <Controller
              name="username"
              control={loginControl}
              defaultValue=""
              rules={{
                required: "Username is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!loginErrors.username}
                  helperText={loginErrors.username?.message}
                  style={{ width: "60%" }}
                />
              )}
            />
            <Controller
              name="password"
              control={loginControl}
              defaultValue=""
              rules={{
                required: "Password is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!loginErrors.password}
                  helperText={loginErrors.password?.message}
                  style={{ width: "60%", marginBottom: "30px" }}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>

          <form
            onSubmit={signupSubmit(handleSignupSubmit)}
            className="sign-up-form"
          >
            <h2 className="title">Sign up</h2>
            <Controller
              name="username"
              control={signupControl}
              defaultValue=""
              rules={{
                required: "Username is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!signupErrors.username}
                  helperText={signupErrors.username?.message}
                  style={{ width: "60%" }}
                />
              )}
            />
            <Controller
              name="email"
              control={signupControl}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!signupErrors.email}
                  helperText={signupErrors.email?.message}
                  style={{ width: "60%" }}
                />
              )}
            />
            <Controller
              name="password"
              control={signupControl}
              defaultValue=""
              rules={{
                required: "Password is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!signupErrors.password}
                  helperText={signupErrors.password?.message}
                  style={{ width: "60%", marginBottom: "30px" }}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </form>

          <Link to="/admin" className="admin-link">
            Admin Login
          </Link>
        </div>
      </div>

      <div className="logo-container right">
        <img
          src={require("../assets/Group 13.png")}
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              Sign up
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
