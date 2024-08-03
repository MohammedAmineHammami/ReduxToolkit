import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-section">
          <h6>Company</h6>
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
        <div class="footer-section">
          <h6>Links</h6>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="footer-section">
          <h6>Follow Us</h6>
          <div class="social-icons">
            <a href="https://facebook.com" class="fab fa-facebook-f"></a>
            <a href="https://twitter.com" class="fab fa-twitter"></a>
            <a href="https://instagram.com" class="fab fa-instagram"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          Made with Love <i class="fas fa-heart"></i> by :{" "}
          <span> Mohamed Amine Hammami</span>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
