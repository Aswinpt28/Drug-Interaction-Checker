import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import guardianMedLogo from "../assets/Group 13.png";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, handleLogout, handleSignIn, userName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 1 : 1}
      className={`navbar navbar-expand-sm ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <Toolbar>
        <NavLink to="/" className="navbar-brand">
          <img
            src={guardianMedLogo}
            alt="Guardian Med Logo"
            style={{
              width: "160px",
              height: "25px",
              marginRight: "10px",
            }}
          />
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleDrawer}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          className="drawer"
        >
          <div className="drawer-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/details/:id"
                  className="nav-link"
                  onClick={toggleDrawer}
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  DRUGS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/check"
                  className="nav-link"
                  onClick={toggleDrawer}
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  INTERACTION CHECKER
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pill"
                  className="nav-link"
                  onClick={toggleDrawer}
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  PILL IDENTIFIER
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/newdrugs"
                  className="nav-link"
                  onClick={toggleDrawer}
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  NEW DRUGS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/side"
                  className="nav-link"
                  onClick={toggleDrawer}
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  SIDE EFFECTS
                </NavLink>
              </li>
            </ul>
            <div className="drawer-footer">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  <NavLink to="/profile">
                    <Avatar
                      alt="User Avatar"
                      style={{
                        backgroundColor: "#23386f",
                        cursor: "pointer",
                        marginLeft: "3px",
                      }}
                    >
                      {userName ? userName.charAt(0).toUpperCase() : ""}
                    </Avatar>
                  </NavLink>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleSignIn}
                >
                  Login/Signup
                </Button>
              )}
            </div>
          </div>
        </Drawer>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
            <li className="nav-item">
              <NavLink
                to="/details/:id"
                className="nav-link"
                style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
              >
                DRUGS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/check"
                className="nav-link"
                style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
              >
                INTERACTION CHECKER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pill"
                className="nav-link"
                style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
              >
                PILL IDENTIFIER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/newdrugs"
                className="nav-link"
                style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
              >
                NEW DRUGS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/side"
                className="nav-link"
                style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
              >
                SIDE EFFECTS
              </NavLink>
            </li>
          </ul>
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              <Button
                variant="outlined"
                color="error"
                onClick={handleLogout}
                className="ms-3"
              >
                Logout
              </Button>
              <NavLink to="/profile">
                <Avatar
                  alt="User Avatar"
                  style={{
                    backgroundColor: "#23386f",
                    cursor: "pointer",
                    marginLeft: "15px",
                  }}
                >
                  {userName ? userName.charAt(0).toUpperCase() : ""}
                </Avatar>
              </NavLink>
            </div>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSignIn}
              className="ms-auto"
            >
              Login/Signup
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
