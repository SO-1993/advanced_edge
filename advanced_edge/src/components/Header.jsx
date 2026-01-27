import { Link } from "react-router-dom";
import "../css/App.css";
import "../css/index.css";

import new_logo from "../assets/images/new_logo.png";

function Header() {
  return (
    <header className="header">
      {/* Logo / Home Link */}
      <div className="header_brand">
        <Link to="/" aria-label="Go to homepage">
          <img
            src={new_logo}
            alt="Advanced Edge Ltd logo"
            className="header-logo"
          />
        </Link>
      </div>

      {/* Spacer column */}
      <div />

      {/* Utility links */}
      <div className="header-utility">
        <Link to="/gallery" className="header-link">
          Gallery
        </Link>

        <a href="tel:+441234567890" className="call-now">
          Call Now
        </a>
      </div>
    </header>
  );
}

export default Header;
