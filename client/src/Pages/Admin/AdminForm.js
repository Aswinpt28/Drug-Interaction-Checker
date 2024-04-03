import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import Logo from "../../assets/Group 13.png";
import "./AdminForm.css";
import { makeRequest } from "../../Axios";
import { AuthContext } from "../../Context/AuthContext";

const AdminForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  useEffect(() => {
    if (user && user.user_type === "admin") {
      navigate("/admin/doctors");
    }
  }, [navigate, user]);

  const handleLogin = async (data) => {
    try {
      const response = await makeRequest.post("/auth/admin/login", data);

      if (response.status === 200 || response.status === 201) {
        setUser(response.data);
        navigate("/admin/doctors");
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
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "email is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
          <Button type="submit" variant="outlined" color="inherit">
            Login
          </Button>
        </form>
        <Link to="/login" className="back-link">
          <Button variant="text" color="inherit">
            User Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminForm;
