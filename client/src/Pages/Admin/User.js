import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import Divider from "@mui/material/Divider";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/userlist/list"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Container sx={{ mt: 5, mr: 9 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            fontFamily="'Nunito', sans-serif"
            gutterBottom
            color={"#23386f"}
          >
            User List
          </Typography>
          <Divider
            sx={{
              margin: "12px 0",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {user.username}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      gutterBottom
                    >
                      Email: {user.email}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Phone: {user.phonenumber}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Profession: {user.profession}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserList;
