// src/UserManagement.js

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import UserList from "../../components/UserList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const UserManagement = () => {
  const isSmallScreen = useMediaQuery("(max-width: 993px)");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
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
          <Container>
            <h1>User Management</h1>
            {loading ? <p>Loading...</p> : <UserList users={users} />}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
