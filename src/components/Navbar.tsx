import{ useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-link">
          Grupp 3
        </Link>
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/about-us">Beverages</Link>
          </li>
          <li>
            <Link to="/contact-form">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
