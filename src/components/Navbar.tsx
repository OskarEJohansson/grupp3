import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Navbar-1</Link></li>
                <li><Link to="/about-us">Navbar-2</Link></li>
                <li><Link to="/contact-form">Navbar-3</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;

