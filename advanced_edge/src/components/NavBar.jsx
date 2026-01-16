import {Link} from "react-router-dom"

function NavBar() {
    return <header className="navbar">
        <div className="navbar_brand">
            <Link to="/" >Home</Link>
        </div>
        <div className="navbar-links">
        {/* <Link to="/" className="nav-link">Home</Link> */}
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div>
        <button className="call-now">Call Now</button>
        </div>
    </header>
    
}

export default NavBar