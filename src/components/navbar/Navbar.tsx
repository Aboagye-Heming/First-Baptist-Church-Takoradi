import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/images/ch-logo.png";
import "./nav-bar.css";

interface NavItemProps {
  to: string;
  text: string;
  isActive: boolean;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navbarContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isMenuOpen &&
      navbarContainerRef.current &&
      !navbarContainerRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container" ref={navbarContainerRef}>
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            {/* <span className="logo-icon">⛪</span> */}
            <span className="logo-text">
              <img
                src={image}
                alt="First Baptist Church Takoradi Logo"
                className="logo-image"
              />
            </span>
            <span className="logo-abbr">
              {" "}
              <img
                src={image}
                alt="First Baptist Church Takoradi Logo"
                className="logo-image"
              />
            </span>
          </Link>
          <div
            className={`menu-icon ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="hamburger">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
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
            {/* <NavItem
              to="/ministries"
              text="Ministries"
              isActive={location.pathname === "/ministries"}
            />
            <NavItem
              to="/sermons"
              text="Sermons"
              isActive={location.pathname === "/sermons"}
            />
            <NavItem
              to="/events"
              text="Events"
              isActive={location.pathname === "/events"}
            /> */}
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

function NavItem({ to, text, isActive }: NavItemProps) {
  return (
    <li className="nav-item">
      <Link to={to} className={`nav-links ${isActive ? "active" : ""}`}>
        <span className="link-text">{text}</span>
        <span className="link-underline"></span>
      </Link>
    </li>
  );
}

export default Navbar;
