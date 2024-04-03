import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Divider,
  Box,
  Hidden,
  IconButton,
} from "@mui/material";
import { FaUserMd, FaBars } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { BiCalendarEvent } from "react-icons/bi";
import { GiPill, GiMedicines } from "react-icons/gi";
import Guard from "../assets/Group 13.png";

const Sidebar = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 1 }}
        >
          <FaBars />
        </IconButton>
      </Hidden>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {sidebarContent()}
      </Drawer>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
            },
          }}
        >
          {sidebarContent()}
        </Drawer>
      </Hidden>
    </nav>
  );

  function sidebarContent() {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" component="div" sx={{ color: "#23408e" }}>
          <Link to="/admin/doctors" style={{ textDecoration: "none" }}>
            <img
              src={Guard}
              alt="guard"
              style={{
                width: "150px",
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            />
          </Link>
        </Typography>
        <Divider />
        <List>
          {[
            {
              to: "/admin/doctors",
              text: "Doctors",
              icon: <FaUserMd style={{ color: "#23408E" }} />,
            },
            {
              to: "/admin/user",
              text: "Users",
              icon: <BsPeopleFill style={{ color: "#880808" }} />,
            },
            {
              to: "/admin/meetings",
              text: "Meetings",
              icon: <BiCalendarEvent style={{ color: "#23408E" }} />,
            },
            {
              to: "/admin/medicine",
              text: "Medicine",
              icon: <GiPill style={{ color: "#880808" }} />,
            },
            {
              to: "/admin/adddrugs",
              text: "Add Drugs",
              icon: <GiMedicines style={{ color: "#23408E" }} />,
            },
          ].map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.to}
              sx={{
                color: "#191919",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
            fullWidth
            sx={{ mt: 40 }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    );
  }
};

export default Sidebar;
