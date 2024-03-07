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
        <Link to="/" className="brand-link"><img
        src='https://trello.com/1/cards/65de1446ad94536b02ad46ce/attachments/65de16933597ddcc58f55a35/previews/65de16943597ddcc58f55aa0/download/loggawhite.png' 
        alt='Group icon'
        width="auto"
        height="100"
        />
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
            <Link to="/contact-form"><img
                src="https://cdn4.vectorstock.com/i/1000x1000/71/93/black-shopping-cart-icon-on-transparent-background-vector-31557193.jpg"
                alt="Cart"
                width="40"
                height="40"
              /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
