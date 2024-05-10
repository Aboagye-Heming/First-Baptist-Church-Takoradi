import { useEffect, useRef, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import logo from "../../assets/images/ch-logo.svg";
import "./nav-bar.css";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navbarContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      isMenuOpen &&
      navbarContainerRef.current &&
      !navbarContainerRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container" ref={navbarContainerRef}>
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            FBCT
          </Link>
          <div
            className={`menu-icon ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul
            className={`nav-menu ${isMenuOpen ? "active" : ""}`}
            onClick={closeMenu}
          >
            <NavItem to="/" text="Home" isActive={location.pathname === "/"} />
            <NavItem
              to="/about-us"
              text="About Us"
              isActive={location.pathname === "/about-us"}
            />
            <NavItem
              to="/activities"
              text="Activities"
              isActive={location.pathname === "/activities"}
            />
            <NavItem
              to="/media-center"
              text="Media Center"
              isActive={location.pathname === "/media-center"}
            />
            <NavItem
              to="/contact-us"
              text="Contact"
              isActive={location.pathname === "/contact-us"}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}


function NavItem({ to, text }) {
  const location = useLocation();

  return (
    <li className="nav-item">
      <Link
        to={to}
        className={`nav-links ${location.pathname === to ? "active" : ""}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default Navbar;
