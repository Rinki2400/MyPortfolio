import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../style/components/Footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-top">
        <h3 className="footer-title">Rinki Sharma</h3>
        <p className="footer-sub">MERN Stack Developer</p>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:rinkisharma@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved | Designed by <span>Rinki Sharma</span></p>
      </div>
    </footer>
  );
};

export default Footer;
