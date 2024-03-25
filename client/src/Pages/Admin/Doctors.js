import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Form } from "react-bootstrap";
import Sidebar from "../../components/sidebar";
import { Button } from "@mui/material";

const DatabaseManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: "", specialty: "" });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const apiUrl = "http://localhost:3001/doctors";

  const fetchDoctors = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleShowEditModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedDoctor(null);
    setShowEditModal(false);
  };

  const handleEditDoctor = async () => {
    try {
      const response = await fetch(`${apiUrl}/${selectedDoctor.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDoctor),
      });

      if (response.ok) {
        fetchDoctors();
        handleCloseEditModal();
      } else {
        console.error("Error updating doctor");
      }
    } catch (error) {
      console.error("Error updating doctor:", error);
    }
  };

  const handleAddDoctor = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDoctor),
      });

      if (response.ok) {
        fetchDoctors();
        setNewDoctor({ name: "", specialty: "" });
        handleCloseModal();
      } else {
        console.error("Error adding new doctor");
      }
    } catch (error) {
      console.error("Error adding new doctor:", error);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <h2>Doctors</h2>
          <Row>
            {doctors.map((doctor) => (
              <Col key={doctor.id} md={4} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>Specialty: {doctor.specialty}</Card.Text>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => handleShowEditModal(doctor)}
                    >
                      Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={4} style={{ marginLeft: "700px" }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setShowModal(true)}
          >
            Add Doctor
          </Button>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formDoctorName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor's name"
                value={newDoctor.name}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDoctorSpecialty">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor's specialty"
                value={newDoctor.specialty}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, specialty: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddDoctor}>
            Add Doctor
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEditDoctorName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor's name"
                value={newDoctor.name}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditDoctorSpecialty">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor's specialty"
                value={newDoctor.specialty}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, specialty: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditDoctor}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DatabaseManagement;
