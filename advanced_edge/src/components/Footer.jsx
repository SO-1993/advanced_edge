// src/components/Footer.jsx
import { Link } from "react-router-dom";
import new_logo from "../assets/images/new_logo.png";

import "../css/App.css";
import "../css/index.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" aria-label="Go to homepage">
            <img
              src={new_logo}
              alt="Advanced Edge Ltd logo"
              className="footer-logo"
            />
          </Link>

          <p className="footer-tagline">
            Refined groundworks, paving & landscaping
            <br />— built to last.
          </p>
        </div>

        {/* Links */}
        <nav className="footer-nav" aria-label="Footer">
          <h3 className="footer-heading">Explore</h3>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/gallery" className="footer-link">
            Gallery
          </Link>
          <a href="#contact-form" className="footer-link">
            Contact
          </a>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <h3 className="footer-heading">Get in touch</h3>

          <a className="footer-link" href="tel:+447881202979">
            07881 202979
          </a>
          <a className="footer-link" href="mailto:liam@advancededge.co.uk">
            liam@advancededge.co.uk
          </a>

          <p className="footer-small">Mon–Fri: 8:00am – 5:00pm</p>

          {/* Make CTA match header Call Now exactly */}
          <a className="call-now footer-call" href="tel:+447881202979">
            Call now
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-small">
          © {year} Advanced Edge Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;