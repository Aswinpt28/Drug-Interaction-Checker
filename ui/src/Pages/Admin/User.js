// UserList.js

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Sidebar from "../../components/sidebar";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const sampleData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ];

  useEffect(() => {
    setUsers(sampleData);
  });

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <h2>User List</h2>
          <Row>
            {users.map((user) => (
              <Col key={user.id} md={3} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ID: {user.id}
                    </Card.Subtitle>
                    <Card.Text>Email: {user.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
