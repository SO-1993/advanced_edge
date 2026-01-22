import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_brand">
        <Link to="/">Advanced Edge</Link>
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
