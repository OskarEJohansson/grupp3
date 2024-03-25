import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu, isOpen, isAdminView, toggleAdminView }) => {
  return (
    <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="brand-link">
        </Link>
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul className="nav-list">
          {!isAdminView && (
            <>
              <li>
                <Link to="/category-page">Food</Link>
              </li>
              <li>
                <Link to="/beverage-page">Beverages</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </>
          )}
          <li>
            <button onClick={toggleAdminView}>
              {isAdminView ? "Switch to User View" : "Switch to Admin View"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
