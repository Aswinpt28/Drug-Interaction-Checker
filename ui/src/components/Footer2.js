import React from "react";
import "./Footer2.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <div className="footer-container">
          <div className="footer-social-media" style={{ fontSize: "13px" }}>
            &copy; 2024 GuardianMed - All rights reserved | Legal Notice |
            General conditions of sale | Privacy Policy
            <Link
              to="#"
              className="facebook"
              style={{ marginLeft: "603px" }}
            ></Link>
            <Link to="#" className="twitter"></Link>
            <Link to="#" className="whatsapp"></Link>
            <Link to="#" className="instagram"></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
