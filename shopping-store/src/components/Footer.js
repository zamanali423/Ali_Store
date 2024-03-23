import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from "react";

const Footer = () => {
  return (
    <footer className="creative-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Discover a digital wonderland where your desires meet convenience.
            Unleash your shopping spree amidst a realm of endless choices.
            Embrace the ease of a click, as your dreams come to life with each
            purchase.
          </p>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:zamanyaseen178@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> zamanyaseen178@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923054800647">
                <FontAwesomeIcon icon={faPhone} /> +92 (305) 4800-647
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLocationDot} /> Islamabad, Rawalpindi,
                Pakistan
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul className="social-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Zaman's Store All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
