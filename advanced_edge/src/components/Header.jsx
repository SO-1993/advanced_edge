import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/index.css';

function Header() {
    return (
      <header className="header">
        <div className="header_brand">
          <Link to="/">Advanced Edge</Link>
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