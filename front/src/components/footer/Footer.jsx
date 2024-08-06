import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h6>Company</h6>
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h6>Links</h6>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h6>Follow Us</h6>
          <div className="social-icons">
            <a href="https://facebook.com" className="fab fa-facebook-f"></a>
            <a href="https://twitter.com" className="fab fa-twitter"></a>
            <a href="https://instagram.com" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Made with Love <i className="fas fa-heart"></i> by :{" "}
          <span> Mohamed Amine Hammami</span>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
