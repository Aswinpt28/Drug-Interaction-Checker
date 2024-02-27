import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import Logo from "../assets/Group 13.png";
// import "./AdminForm.css";

const AdminForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/admin/login",
        data
      );

      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        navigate("/");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during admin login:", error);
    }
  };

  return (
    <div className="admin-page">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="admin-container">
        <h2 className="admin-title" style={{ marginTop: "10px" }}>
          Admin Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)} className="admin-form">
          <div className="admin-input-field">
            <Controller
              name="username"
              control={control}
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
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  style={{ marginBottom: "30px", marginTop: "10px" }}
                />
              )}
            />
          </div>
          <div className="admin-input-field">
            <Controller
              name="password"
              control={control}
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
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  style={{ marginBottom: "20px" }}
                />
              )}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
        <Link to="/login" className="back-link">
          User login here
        </Link>
      </div>
    </div>
  );
};

export default AdminForm;
