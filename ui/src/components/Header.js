import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const currentPath = window.location.pathname;

  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit the text color
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "white",
        boxShadow: "0px 4px 2px -2px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
