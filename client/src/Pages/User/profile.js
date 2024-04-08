import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./userStyles/UserPage.css";
import { Button, Typography } from "@mui/material";
import cat from "../../assets/user.png";

import { makeRequest } from "../../Axios";

function UserPage() {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    makeRequest
      .get("/user/getuser")
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="mt-custom">
        <Row className="user-page-row">
          <Col md={3} className="mt-5">
            <div className="first-col">
              <div className="content-wrapper">
                <Typography variant="h5" align="center">
                  My Account
                </Typography>
                <div className="options">
                  <Typography variant="body1" align="center">
                    Account Overview
                  </Typography>
                  {/* <div>Med History</div> */}
                </div>
              </div>
            </div>
          </Col>

          {profileData && (
            <Col md={6}>
              <div className="second-col-content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={cat}
                    alt="Pr"
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <h5 style={{ margin: "0" }}>{profileData.username}</h5>
                    <p style={{ margin: "0" }}>{profileData.email}</p>
                  </div>
                </div>
              </div>
              <div className="second-col-content">
                <div>
                  <h4 style={{ display: "inline" }}>Personal Information</h4>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    variant="outlined"
                    color="inherit"
                    style={{ marginLeft: "10px" }}
                  >
                    Edit
                  </Button>
                  <br />
                  <br />
                  {profileData && (
                    <div>
                      <p>
                        &nbsp;&nbsp;&nbsp; Username
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {profileData.username}
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp; Profession
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {profileData.profession}
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp; Email
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {profileData.email}
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp; Phone
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {profileData.phonenumber}
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp; Password
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp; ********
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          )}

          <Col md={3} className="mt-5">
            <div className="third-col-content">
              <div>
                <h3>Tips</h3>
                <div>
                  <div>
                    <p className="justify-content-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={3}></Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPage;
