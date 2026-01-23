import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/index.css';

import new_logo from "../assets/images/new_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_brand">
        <Link to="/">
        <img src={new_logo} alt="Company logo" className="footer-logo" />
        </Link>
      </div>

      <div /> {/* spacer column */}

      <div className="footer-utility">
        <Link to="/gallery" className="footer-link">
          Gallery
        </Link>
        <button className="call-now">Call Now</button>
      </div>
    </footer>
  );
}

export default Footer;
