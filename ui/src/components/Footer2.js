import React from "react";
import { MDBFooter, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Guard from "../assets/Group 13.png";
import "./Footer2.css";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <div className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 ">
              <div>
                <img
                  src={Guard}
                  alt="Company Logo"
                  className="guard img-fluid mt-2"
                  style={{ maxWidth: "250px" }}
                />
              </div>

              <p className="mt-3">
                Experience a revolution in healthcare with tailored software
                solutions crafted to seamlessly address the distinctive
                requirements of your medical practice. Let us elevate your
                clinic with customized technology designed to enhance patient
                care and optimize operational efficiency.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <Link to="/" className="text-reset text-decoration-none">
                  Home
                </Link>
              </p>
              <p>
                <Link
                  to="/services"
                  className="text-reset text-decoration-none"
                >
                  Services
                </Link>
              </p>
              <p>
                <Link to="/doctors" className="text-reset text-decoration-none">
                  Doctors
                </Link>
              </p>
              <p>
                <Link
                  to="/premium-assistance"
                  className="text-reset text-decoration-none"
                >
                  Premium Assistance
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Our Products</h6>
              <p>
                <Link
                  to="/scanners"
                  className="text-reset text-decoration-none"
                >
                  Scanners 3D
                </Link>
              </p>
              <p>
                <Link
                  to="/cad-software"
                  className="text-reset text-decoration-none"
                >
                  CAD software
                </Link>
              </p>
              <p>
                <Link
                  to="/impression-3d"
                  className="text-reset text-decoration-none"
                >
                  Impression 3D
                </Link>
              </p>
              <p>
                <Link
                  to="/consumables"
                  className="text-reset text-decoration-none"
                >
                  Consumables
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-3 mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope className="me-3" />
                info@example.com
              </p>
              <p>
                <FaPhone className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <FaPrint className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div className="row align-items-center">
          <div className="col-md-8">
            <p className="mb-0">
              © 2024 GuardianMed - All rights reserved | Legal Notice | General
              conditions of sale | Privacy Policy
            </p>
          </div>
          <div className="col-md-4">
            <span className="ml-2">
              <Link to="#" className="facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="social-icon"
                  style={{
                    fontSize: "24px",
                    color: "gray",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link to="#" className="twitter">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="social-icon"
                  style={{
                    fontSize: "24px",
                    color: "gray",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link to="#" className="whatsapp">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="social-icon"
                  style={{
                    fontSize: "24px",
                    color: "gray",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link to="#" className="instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-icon"
                  style={{ fontSize: "24px", color: "gray" }}
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </MDBFooter>
  );
}
