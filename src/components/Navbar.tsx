import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../assets/ShoppingCart";

const Navbar = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdminView = () => {
    setIsAdminView(!isAdminView);
  };

  return (
    <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="brand-link">
          <img
            src="https://media.discordapp.net/attachments/1213110126446125117/1214503813306785852/companylogo.png?ex=65f959d1&is=65e6e4d1&hm=75f4b22d314a9030a11ee13c0ad32d1d22fad479cb6cd1f42b43ceab29ad6c8a&=&format=webp&quality=lossless&width=1390&height=464"
            alt="Group icon"
            width="auto"
            height="100"
          />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/category-page">Food</Link>
          </li>
          <li>
            <Link to="/drink-page">Beverages</Link>
          </li>
          {!isAdminView && (
            <li>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
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
