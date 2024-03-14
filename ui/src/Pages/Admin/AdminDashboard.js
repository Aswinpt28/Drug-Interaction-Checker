import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/sidebar";

const meetings = [
  {
    patientName: "John Doe",
    doctorName: "Dr. Smith",

    date: "March 20, 2024",
    time: "2:00 PM - 3:30 PM",
  },
  {
    patientName: "Jane Doe",
    doctorName: "Dr. Johnson",

    date: "March 21, 2024",
    time: "3:30 PM - 5:00 PM",
  },
];

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Container className="mt-5" style={{ marginLeft: "195px" }}>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "20px",
                      marginBottom: "20px",
                      textAlign: "center",
                      background: "#ffffff51",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#3498db",
                        marginBottom: "15px",
                      }}
                    >
                      Doctors
                    </h3>

                    <div style={{ marginTop: "10px" }}>
                      <div style={{ marginBottom: "15px" }}>
                        <strong>Dr. John Doe</strong>
                        <div>Specialty: Cardiology</div>
                        <div>Location: New York</div>
                      </div>

                      <div style={{ marginBottom: "15px" }}>
                        <strong>Dr. Jane Smith</strong>
                        <div>Specialty: Pediatrics</div>
                        <div>Location: Los Angeles</div>
                      </div>

                      <div>
                        <strong>Dr. Alex Johnson</strong>
                        <div>Specialty: Neurology</div>
                        <div>Location: Chicago</div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "20px",
                      marginBottom: "20px",
                      textAlign: "center",
                      background: "#ffffff51",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#2ecc71",
                        marginBottom: "15px",
                      }}
                    >
                      Users
                    </h3>

                    <div style={{ marginTop: "10px" }}>
                      <div style={{ marginBottom: "15px" }}>
                        <strong>User 1</strong>
                        <div>Email: user1@example.com</div>
                        <div>Role: Admin</div>
                      </div>

                      <div style={{ marginBottom: "15px" }}>
                        <strong>User 2</strong>
                        <div>Email: user2@example.com</div>
                        <div>Role: Moderator</div>
                      </div>

                      <div>
                        <strong>User 3</strong>
                        <div>Email: user3@example.com</div>
                        <div>Role: Member</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "20px",
                      textAlign: "center",
                      background: "#ffffff51",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#e74c3c",
                        marginBottom: "15px",
                      }}
                    >
                      Medicine Content
                    </h3>

                    <div style={{ marginTop: "10px" }}>
                      <div style={{ marginBottom: "15px" }}>
                        <strong>Medicine A</strong>
                        <div>Type: Painkiller | Dosage: 500mg</div>
                      </div>

                      <div style={{ marginBottom: "15px" }}>
                        <strong>Medicine B</strong>
                        <div>Type: Antibiotic | Dosage: 250mg</div>
                      </div>

                      <div>
                        <strong>Medicine C</strong>
                        <div>Type: Anti-inflammatory | Dosage: 100mg</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <Col md={1}></Col> */}
            <Col md={3}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  background: "#ffffff51",
                }}
              >
                <img
                  src="https://placekitten.com/150/150"
                  alt="Profile"
                  style={{ borderRadius: "50%", marginBottom: "20px" }}
                />
                <h3 style={{ color: "#3498db", marginBottom: "10px" }}>
                  Poocha ser
                </h3>
                <p style={{ color: "#95a5a6", marginBottom: "20px" }}>
                  Kitten Developer
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur consectetur.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 mb-5" style={{ marginLeft: "170px" }}>
            <Col md={10}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  background: "#ffffff51",
                }}
              >
                <h3 style={{ color: "#3498db", marginBottom: "10px" }}>
                  Meeting Schedules
                </h3>

                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {meetings.map((meeting, index) => (
                    <li key={index} style={{ marginBottom: "20px" }}>
                      <h4 style={{ color: "#3498db", marginBottom: "10px" }}>
                        Meeting {index + 1}
                      </h4>
                      <div>
                        <strong>Patient Name:</strong> {meeting.patientName}
                        <strong> Doctor Name:</strong> {meeting.doctorName}
                      </div>
                      <div>
                        <strong>Date:</strong> {meeting.date}
                        <strong> Time:</strong> {meeting.time}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
