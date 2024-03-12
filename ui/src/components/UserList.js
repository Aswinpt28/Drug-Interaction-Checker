// src/components/UserList.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <Card key={user.id} variant="outlined" className="mb-3">
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
