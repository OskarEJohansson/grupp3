import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./Searchbar";
import ShoppingCartIcon from "../../Cart/components/ShoppingCart";
import CompanyLogo from "../../../assets/images/companylogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`bg-gradient-to-r from-backgroundColor to-brightColor py-4 px-6 flex justify-between items-center fixed w-full transition duration-300`}
      style={{ zIndex: "9999" }}
    >
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="brand-link flex items-center">
            <img
              src={CompanyLogo}
              alt="Taste Trails logga"
              className="h-10 w-auto pr-5"
            />
          </NavLink>
          {windowWidth > 768 && <SearchBar isSearchOpen={true} />}
        </div>
        <div className="flex items-center justify-end md:justify-start w-full md:w-auto">
          {windowWidth <= 768 && (
            <button
              onClick={handleMenuToggle}
              className="search-icon md:hidden flex items-center focus:outline-none"
            >
              <FiMenu className="text-white text-xl" />
            </button>
          )}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <NavLink to="/" className="text-white hover:text-gray-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category-page"
                className="text-white hover:text-gray-200"
              >
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/drink-page"
                className="text-white hover:text-gray-200"
              >
                Drinks
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <ShoppingCartIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50"
          onClick={handleMenuToggle}
        ></div>
      )}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#e3c499] z-50 opacity-90">
          <ul>
            <li>
              <SearchBar isSearchOpen={true} />
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-gray-200 block py-2 px-4"
                onClick={handleMenuToggle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category-page"
                className="text-white hover:text-gray-200 block py-2 px-4"
                onClick={handleMenuToggle}
              >
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/drink-page"
                className="text-white hover:text-gray-200 block py-2 px-4"
                onClick={handleMenuToggle}
              >
                Drinks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="text-white hover:text-gray-200 block py-2 px-4"
                onClick={handleMenuToggle}
              >
                <ShoppingCartIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
