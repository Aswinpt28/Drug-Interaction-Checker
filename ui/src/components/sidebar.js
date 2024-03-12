import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { BsPeopleFill, BsHouse, BsFillPersonFill } from "react-icons/bs";
import { useAuth } from "./AuthContect";
import Guard from "../assets/Group 13.png";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const styles = {
    sidebar: {
      gridArea: "sidebar",
      backgroundColor: "#2c2c2c",
      overflowY: "auto",
      transition: "all 0.5s",
      WebkitTransition: "all 0.5s",
      // height: "50px",
      // position: "fixed",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px 30px 0 30px",

      marginBottom: "10px",
      color: "#23408e",
    },
    headerText: {
      textDecoration: "none",
    },
    logo: {
      width: "150px",
      height: "25px",
      marginBottom: "10px",
      marginTop: "10px",
    },
    sidebarList: {
      padding: 0,
      listStyleType: "none",
    },
    sidebarListItem: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      fontSize: "18px",
      cursor: "pointer",
      textDecoration: "none",
      color: "#191919",
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
    sidebarIcon: {
      marginRight: "10px",
    },
    logoutButton: {
      marginTop: "450px",
      width: "180px",
      marginLeft: "14px",
    },
  };

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <Drawer
      variant="permanent"
      id="sidebar"
      className="sidebar-responsive"
      sx={styles.sidebar}
    >
      <div style={styles.header}>
        <Link to="/admindash" style={styles.headerLink}>
          <img src={Guard} alt="guard" style={styles.logo} />
        </Link>
      </div>
      <List sx={styles.sidebarList}>
        {[
          {
            to: "/database-management",
            text: "Database",
            icon: <BsHouse style={styles.sidebarIcon} />,
          },
          {
            to: "/user-management",
            text: "Users",
            icon: <BsPeopleFill style={styles.sidebarIcon} />,
          },
          {
            to: "/consultation",
            text: "Consultation",
            icon: <BsFillPersonFill style={styles.sidebarIcon} />,
          },
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={styles.sidebarListItem}
            component={Link}
            to={item.to}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        color="error"
        onClick={handleLogout}
        sx={styles.logoutButton}
      >
        Logout
      </Button>
    </Drawer>
  );
}

export default Sidebar;
