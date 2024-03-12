import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer2";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Med.css";
import doc from "../../assets/doctor.png";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Container
      style={{
        marginTop: "16px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        style={{
          marginBottom: "8px",
        }}
        label="Enter Medicine Name"
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button variant="outlined" color="inherit" onClick={handleSearch}>
        Search Medicine
      </Button>
    </Container>
  );
};

const MedicineDetailsPage = () => {
  const [medicineDetails, setMedicineDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/login");
  };

  const fetchMedicineDetails = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=${searchTerm}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMedicineDetails(data.results[0]);
        setError(null);
      } else {
        setError("Medicine details not found.");
        setMedicineDetails(null);
      }
    } catch (error) {
      console.error("Error fetching medicine details:", error);
      setError("Error fetching medicine details. Please try again.");
      setMedicineDetails(null);
    }
  };

  return (
    <div>
      <Navbar
        isAuthenticated={userToken}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
      <div
        style={{
          backgroundImage: `url(${doc})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "calc(70vh - 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
          marginTop: "65px",
        }}
      >
        <Typography
          className="text"
          variant="h4"
          align="center"
          style={{ marginTop: "65px" }}
        >
          Medicine Details Page
        </Typography>
        <SearchForm onSearch={fetchMedicineDetails} />
        {error && (
          <Typography
            variant="body1"
            color="error"
            style={{ marginTop: "16px" }}
          >
            {error}
          </Typography>
        )}
        {medicineDetails && (
          <Container style={{ marginTop: "16px", textAlign: "justify" }}>
            <Container>
              <Typography variant="h5">
                Name: {medicineDetails.openfda.brand_name}
              </Typography>
            </Container>
            <br />
            <Container>
              <Typography variant="h6">
                {medicineDetails.indications_and_usage}
              </Typography>
            </Container>
            <br />
            <Container>
              <Typography variant="h6">
                {medicineDetails.indication_and_usage}
              </Typography>
            </Container>
            <br />
            <Container>
              <Typography variant="h6">
                {medicineDetails.description}
              </Typography>
            </Container>
          </Container>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MedicineDetailsPage;
