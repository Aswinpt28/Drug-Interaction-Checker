// src/DatabaseManagement.js

import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const DatabaseManagement = () => {
  // Fetch medicine names and details from the database
  const [medicines, setMedicines] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 993px)");

  useEffect(() => {
    // Fetch data from the server and set it to the 'medicines' state
    // Example: fetchMedicineData().then(data => setMedicines(data));
  }, []);

  return (
    <div>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar></Toolbar>
      </AppBar>
      <div className="d-flex">
        <Sidebar />
        <div
          style={{ width: "100%", marginLeft: isSmallScreen ? "0" : "240px" }}
        >
          <h2>Database Management</h2>
          {/* Display medicine details and provide edit functionality */}
          {medicines.map((medicine) => (
            <div key={medicine.id}>
              <p>{medicine.name}</p>
              {/* Add more fields and edit functionality */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatabaseManagement;
