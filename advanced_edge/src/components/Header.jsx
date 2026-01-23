import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/index.css';

import new_logo from "../assets/images/new_logo.png";

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header_brand">
        <Link to="/">
          <img src={new_logo} alt="Company logo" className="header-logo" />
        </Link>
      </div>

      {/* Spacer column */}
      <div />

      {/* Utility links */}
      <div className="header-utility">
        <Link to="/gallery" className="header-link">
          Gallery
        </Link>
        <button className="call-now">Call Now</button>
      </div>
    </header>
  );
}

export default Header;
