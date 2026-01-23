import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/index.css';

import new_logo from "../assets/images/new_logo.png";

function Header() {
    return (
      <header className="header">
        <div className="header_brand">
          <Link to="/">
          <Link to="/">
              <img src={new_logo} alt="Company logo" className="header-logo" />
            </Link>
          </Link>
        </div>
  
        <div /> {/* spacer column */}
  
        <div className="header-utility">
          <div className="header-links">
            <Link to="/gallery" className="header-link">Gallery</Link>
          </div>
          <button className="call-now">Call Now</button>
        </div>
      </header>
    );
  }
  
  export default Header;