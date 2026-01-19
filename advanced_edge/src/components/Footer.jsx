import {Link} from "react-router-dom"

import '../css/App.css';
import '../css/index.css';

function Footer() {
    return <header className="footer">
        <div className="footer-brand">
            <h5>Advanced Edge</h5>
            <h6>Serving Stratford-upon-Avon</h6>
        </div>
        <div className="footer-links">
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div>
        <button className="call-now">Call Now</button>
        </div>
    </header>
    
}

export default Footer