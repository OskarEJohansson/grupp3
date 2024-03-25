import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu, isOpen, isAdminView, toggleAdminView }) => {
  return (
    <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="brand-link">
          <img
            src="https://example.com/logo.png" 
            alt="Logo"
            width="100"
            height="auto"
          />
        </Link>
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul className="nav-list">
          <li>
            <Link to="/category-page">Food</Link>
          </li>
          <li>
            <Link to="/beverage-page">Beverages</Link>
          </li>
          {!isAdminView && ( 
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          )}
          {isAdminView && (
            <>
              <li>
                <Link to="/admin-page">Admin Page</Link>
              </li>
              <li>
                <Link to="/add-food-item-page">Add Food</Link>
              </li>
              <li>
                <Link to="/add-comments-page">Add Comment</Link>
              </li>
              <li>
                <Link to="/rating-page">Rating Page</Link>
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
