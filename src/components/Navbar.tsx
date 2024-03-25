import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="brand-link">
          <img
            src="https://media.discordapp.net/attachments/1213110126446125117/1214503813306785852/companylogo.png?ex=65f959d1&is=65e6e4d1&hm=75f4b22d314a9030a11ee13c0ad32d1d22fad479cb6cd1f42b43ceab29ad6c8a&=&format=webp&quality=lossless&width=1390&height=464"
            alt="Group icon"
            width="auto"
            height="100"
          />
        </Link>
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/category-page">Food</Link>
          </li>
          <li>
            <Link to="/beverage-page">Beverages</Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src="https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg"
                alt="Cart"
                width="60"
                height="60"
              />
            </Link>
          </li>
          <li>
            <Link to="/admin-page">ADMIN PAGE</Link>
          </li>
          <li>
            <Link to="/add-food-item-page">Add Food</Link>
          </li>
          <li>
            <Link to="/add-comments-page">Add Comment</Link>
          </li>
          <li>
            <Link to="/rating-page">Rating page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
