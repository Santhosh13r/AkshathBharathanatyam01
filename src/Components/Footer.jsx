import React from "react";
import aklogo from '../../src/Images/aklogo1.jpg';
import "../App.css"


function Footer() {
  return (
    <footer class="footer ">
   <div class="container-fluid ">
    <div class="footer-content">
      {/* <!-- Logo and About Section --> */}
      <div class="footer-section mt-3">
        <img src={aklogo} alt="Akshath Bharatanatyam" class="footer-logo" height="50"/>
        <p class="footer-about mx-3">
          Dedicated to preserving and promoting the ancient art of Bharatanatyam through passionate performances and dedicated teaching.
        </p>
        <div class="social-links px-4">
          <a href="#" class="social-link" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="social-link" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* <!-- Quick Links Section --> */}
      <div class="footer-section mt-3">
        <h4 class="footer-title">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/photos">Photos</a></li>
          <li><a href="/videos">Videos</a></li>
          <li><a href="/press">Press</a></li>
          <li><a href="/arangetram">Arangetram</a></li>
        </ul>
      </div>

      {/* <!-- Performances Section --> */}
      <div class="footer-section mt-3">
        <h4 class="footer-title">Performances</h4>
        <ul class="footer-links">
          <li><a href="/upcoming">Upcoming Shows</a></li>
          <li><a href="/past-performances">Past Performances</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/awards">Awards</a></li>
        </ul>
      </div>

      {/* <!-- Contact Section --> */}
      <div class="footer-section mt-3">
        <h4 class="footer-title">Contact</h4>
        <ul class="contact-info">
          <li>
            <i class="fas fa-envelope"></i>
            <a href="mailto:info@akshathbharatanatyam.com">info@akshathbharatanatyam.com</a>
          </li>
          <li>
            <i class="fas fa-phone"></i>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span>Chennai, Tamil Nadu, India</span>
          </li>
        </ul>
      </div>
    </div>

  

    {/* <!-- Copyright Section --> */}
    
    <div class="footer-bottom">
      <div class="copyright">
        &copy; 2026 Akshath Bharatanatyam. All rights reserved.
      </div>
      <div class="footer-bottom-links text-center">
        <a href="/privacy-policy" class="text-decoration-none">Privacy Policy</a>
        <a href="/terms-of-use" class="text-decoration-none">Terms of Use</a>
        <a href="/sitemap" class="text-decoration-none">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
