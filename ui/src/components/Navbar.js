import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import guardianMedLogo from "../assets/Group 13.png";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, handleLogout, handleSignIn, userName }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const avatarStyle = {
    marginLeft: "220px",
    width: "30px",
    height: "30px",
    backgroundColor: "#23386f",
    cursor: "pointer",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    color: isScrolled ? "#f8f8f8" : "#23408E",
    fontWeight: "small",
    marginLeft: "30px",
    fontSize: "12px",
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: isScrolled ? "#191919" : "#fff",
        transition: "background-color 0s ease",
      }}
      className="navbar"
    >
      <Toolbar style={{ display: "flex" }}>
        <Link to="/" className="link" style={linkStyle}>
          <img
            src={guardianMedLogo}
            alt="Guardian Med Logo"
            style={{
              width: "170px",
              height: "25px",
              margin: "0px 0px 10px 5px",
            }}
          />
          <Link
            to="/details/:id"
            className="link"
            style={{ marginLeft: "250px" }}
          >
            DRUGS
          </Link>
        </Link>
        <Link to="/check" className="link" style={linkStyle}>
          INTERACTION CHECKER
        </Link>
        <Link to="/pill" className="link" style={linkStyle}>
          PILL IDENTIFIER
        </Link>
        <Link to="/newdrugs" className="link" style={linkStyle}>
          NEW DRUGS
        </Link>
        <Link to="/side" className="link" style={linkStyle}>
          SIDE EFFECTS
        </Link>
        {isAuthenticated ? (
          <>
            <Avatar alt="User Avatar" style={avatarStyle}>
              {userName ? userName.charAt(0).toUpperCase() : ""}
            </Avatar>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              style={{ marginLeft: "40px", width: "100px" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSignIn}
              style={{ marginLeft: "210px" }}
            >
              Login/Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
