import { Link } from "react-router-dom";
import new_logo from "../assets/images/new_logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header_brand">
        <Link to="/" aria-label="Go to homepage">
          <img
            src={new_logo}
            alt="Advanced Edge Ltd logo"
            className="header-logo"
          />
        </Link>
      </div>

      <nav className="header-utility" aria-label="Primary">
        <Link to="/gallery" className="header-link">
          Gallery
        </Link>

        <a href="tel:+441234567890" className="call-now">
          Call Now
        </a>
      </nav>
    </header>
  );
}

export default Header;
