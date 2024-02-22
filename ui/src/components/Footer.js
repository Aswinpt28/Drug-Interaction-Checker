import React from "react";
import "./Footer.css";
import Guard from "../assets/Group 13.png";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="hr"></div>
      <div className="footer-content">
        <div className="column">
          <div className="logo3">
            <img src={Guard} alt="Logo" className="logo3" />
            <p className="mk">
              Experience a revolution in healthcare with tailored software
              solutions crafted to seamlessly address the distinctive
              requirements of your medical practice. Let us elevate your clinic
              with customized technology designed to enhance patient care and
              optimize operational efficiency.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="column2" style={{ margin: "0px 5px 0px 0px" }}>
          <div className="quick-links"></div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="column2" style={{ margin: "0px 5px 0px 0px" }}>
          <div className="quick-links"></div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="column2" style={{ margin: "0px 5px 0px 0px" }}>
          <div className="quick-links"></div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="column2" style={{ margin: "-59px 5px 0px 593px" }}>
          <div className="quick-links">
            <h3 className="h3">Quick Links</h3>
            <div>
              <p className="l">Home</p>
            </div>
            <div>
              <p className="l">Services</p>
            </div>
            <div>
              <p className="l">Doctors</p>
            </div>
          </div>
        </div>

        <div className="column2">
          <div className="quick-links">
            <h3 className="h3">GuardianMed</h3>
            <div>
              <p className="l">Create an account</p>
            </div>
            <div>
              <p className="l">Who are we?</p>
            </div>
            <div>
              <p className="l">Contact us</p>
            </div>
            <div>
              <p className="l">Recruitment</p>
            </div>
          </div>
        </div>

        <div className="column2">
          <div className="quick-links">
            <h3 className="h3">Assistance</h3>
            <div>
              <p className="l">Premium Assistance</p>
            </div>
            <div>
              <p className="l">Frequently Asked Questions</p>
            </div>
            <div>
              <p className="l">Need Help?</p>
            </div>
          </div>
        </div>

        <div className="column2">
          <div className="quick-links">
            <h3 className="h3">Our Products</h3>
            <div>
              <p className="l">Scanners 3D</p>
            </div>
            <div>
              <p className="l">Impression 3D</p>
            </div>
            <div>
              <p className="l">CAD software</p>
            </div>
            <div>
              <p className="l">Consumables</p>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="contact-info">
          <div className="phone-container">
            <FiPhone className="phone-icon" style={{ fontSize: 20 }} />
            <p className="k">Phone: +91 81388 47015</p>
          </div>
          <div className="email-container">
            <FiMail className="email-icon" style={{ fontSize: 20 }} />
            <p className="k">Email: info@medicalcenter.com</p>
          </div>
          <div className="address-container">
            <FiMapPin className="address-icon" style={{ fontSize: 20 }} />
            <p className="k">123 Medical Street</p>
          </div>
          <div>
            <p className="k" style={{ marginLeft: "144px" }}>
              City, Country
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="footer-container">
          <div className="footer-social-media" style={{ fontSize: "13px" }}>
            &copy; 2024 GuardianMed - All rights reserved | Legal Notice |
            General conditions of sale | Privacy Policy
            <Link to="#" className="facebook" style={{ marginLeft: "603px" }}>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#6b6b6a", fontSize: "24px" }}
              />
            </Link>
            <Link to="#" className="twitter">
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{ color: "#6b6b6a", fontSize: "24px" }}
              />
            </Link>
            <Link to="#" className="whatsapp">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#6b6b6a", fontSize: "24px" }}
              />
            </Link>
            <Link to="#" className="instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#6b6b6a", fontSize: "24px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
