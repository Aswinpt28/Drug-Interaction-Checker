// src/Consultation.js

import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Consultation = () => {
  const [meetingId, setMeetingId] = useState("");
  const [meetingUrl, setMeetingUrl] = useState("");
  const isSmallScreen = useMediaQuery("(max-width: 993px)");
  const handleCreateMeeting = () => {
    // Call Agora API to create a new meeting
    // Example: createMeeting().then((data) => { setMeetingId(data.id); setMeetingUrl(data.url); });
  };

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
          <h2>Consultation</h2>
          <button className="btn btn-success" onClick={handleCreateMeeting}>
            Create New Meeting
          </button>
          <p>Meeting ID: {meetingId}</p>
          <p>Meeting URL: {meetingUrl}</p>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
