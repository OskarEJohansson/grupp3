import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import SearchBar from "../Searchbar/components/Searchbar";
import ShoppingCartIcon from "../../Cart/components/ShoppingCart";
import CompanyLogo from "../../../assets/images/companylogo.png";
import CartGlobalState from "../../Cart/utils/CartGlobalState";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAdminView, setIsAdminView] = useState(false);
  const { cart } = CartGlobalState();
  const totalItems = cart.length;

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdminView = () => {
    setIsAdminView(!isAdminView);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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
              style={{ cursor: "pointer" }}
            />
          </NavLink>
          {windowWidth > 768 && (
            <div className="flex items-start px-4">
              <SearchBar />
            </div>
          )}
        </div>
        <div className="flex items-center justify-end md:justify-start w-full md:w-auto">
          {windowWidth <= 1050 && (
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
                to="/recipe-page"
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
              <NavLink to="/cart" className="relative">
                <ShoppingCartIcon />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
            {isAdminView && (
              <li>
                <NavLink to="/admin-page">Admin</NavLink>
              </li>
            )}
            <li>
              <button
                onClick={toggleAdminView}
                className="text-white hover:text-gray-200"
              >
                {isAdminView ? "User View" : "Admin View"}
              </button>
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
        <div className="fixed top-0 left-0 h-full w-72 bg-[#e3c499] z-50 opacity-90">
          <ul>
            <li>
              <SearchBar />
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
                to="/recipe-page"
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
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
            {isAdminView && (
              <li>
                <NavLink
                  to="/admin-page"
                  className="text-white hover:text-gray-200 block py-2 px-4"
                  onClick={handleMenuToggle}
                >
                  Admin
                </NavLink>
              </li>
            )}
            <li>
              <button
                onClick={toggleAdminView}
                className="text-white hover:text-gray-200 block py-2 px-4"
              >
                {isAdminView ? "User View" : "Admin View"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
