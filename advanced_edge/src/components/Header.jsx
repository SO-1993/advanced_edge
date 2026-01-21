import {Link} from "react-router-dom"
import '../css/App.css/'
import '../css/index.css/'

function Header() {
    return <header className="header">
        <div className="header_brand">
            <Link to="/">Advanced Edge</Link>
        </div>
        <div className="header-links">
        {/* <Link to="/" className="header-link">Home</Link> */}
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        </div>
        <div>
        <button className="call-now">Call Now</button>
        </div>
    </header>
    
}

export default Header