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
import { FaUserMd } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { BiCalendarEvent } from "react-icons/bi";
import { GiPill } from "react-icons/gi";
import { useAuth } from "./AuthContect";
import Guard from "../assets/Group 13.png";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const styles = {
    sidebar: {
      gridArea: "sidebar",
      backgroundColor: "black",
      overflowY: "auto",
      transition: "all 0.5s",
      WebkitTransition: "all 0.5s",
      height: "50px",
      position: "fixed",
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
      marginTop: "400px",
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
      style={{
        backgroundColor: "black",
        overflowY: "auto",
        transition: "all 0.5s",
        WebkitTransition: "all 0.5s",
      }}
    >
      <div style={styles.header}>
        <Link to="/admindash" style={styles.headerLink}>
          <img src={Guard} alt="guard" style={styles.logo} />
        </Link>
      </div>
      <List sx={styles.sidebarList}>
        {[
          {
            to: "/doctors",
            text: "Doctors",
            icon: <FaUserMd style={styles.sidebarIcon} color="#23408E" />,
          },
          {
            to: "/user",
            text: "Users",
            icon: <BsPeopleFill style={styles.sidebarIcon} color="#880808" />,
          },
          {
            to: "/meetings",
            text: "Meetings",
            icon: (
              <BiCalendarEvent style={styles.sidebarIcon} color="#23408E" />
            ),
          },
          {
            to: "/medicine",
            text: "Medicine",
            icon: <GiPill style={styles.sidebarIcon} color="#880808" />,
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
