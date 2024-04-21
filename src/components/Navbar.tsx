import logo from "../assets/images/ch-logo.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <h2>
          <a href="#">
            <img src={logo}  alt="church-logo" />
          </a>
        </h2>
        <ul className="flex nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
