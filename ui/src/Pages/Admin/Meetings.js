import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Typography, Grid, Card, CardContent, Divider } from "@mui/material";

const Consultation = () => {
  const [meetings, setMeetings] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 993px)");

  useEffect(() => {
    const fetchScheduledMeetings = async () => {
      try {
        const response = await fetch("your_api_endpoint_here");
        const data = await response.json();

        setMeetings(data);
      } catch (error) {
        console.error("Error fetching scheduled meetings:", error);
      }
    };

    fetchScheduledMeetings();
  }, []);

  const sampleMeetings = [
    {
      id: 1,
      userName: "John Doe",
      doctorName: "Dr. Smith",
      date: "2024-03-14T10:00:00",
    },
    {
      id: 2,
      userName: "Jane Smith",
      doctorName: "Dr. Johnson",
      date: "2024-03-15T15:30:00",
    },
    {
      id: 3,
      userName: "Bob Johnson",
      doctorName: "Dr. Davis",
      date: "2024-03-16T12:45:00",
    },
  ];

  const displayMeetings = meetings.length > 0 ? meetings : sampleMeetings;

  return (
    <div>
      <div className="d-flex" style={{ marginTop: "20px" }}>
        <Sidebar />
        <div
          style={{
            width: "100%",
            marginLeft: isSmallScreen ? "0" : "240px",
            padding: "20px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Upcoming Meetings
          </Typography>
          <Grid container spacing={2}>
            {displayMeetings.map((meeting) => (
              <Grid item key={meeting.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1">
                      Meeting ID: {meeting.id}
                    </Typography>
                    <Divider />
                    <Typography variant="body1">
                      User: {meeting.userName}
                    </Typography>
                    <Typography variant="body1">
                      Doctor: {meeting.doctorName}
                    </Typography>
                    <Typography variant="body1">
                      Date: {new Date(meeting.date).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
