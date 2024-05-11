import { Link } from "react-router-dom";
import facebookLogo from "../../assets/images/facebookLogo.png";
import instagramLogo from "../../assets/images/instagramLogo.png";
import twitterLogo from "../../assets/images/twitterLogo.png";
import youtubeLogo from "../../assets/images/youtubeLogo.png";
import locationLogo from "../../assets/images/maps-pin-line-icon.svg";
import callLogo from "../../assets/images/phone-line-icon.svg";
import messageLogo from "../../assets/images/envelope-line-icon.svg";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-main container">
          <div className="footer-social-media-info ">
            <p>Follow Our social media handle</p>
            <div className="footer-social-media-logos">
              <a href="https://www.facebook.com">
                <img src={facebookLogo} alt="facebook logo" />
              </a>
              <a href="https://twitter.com">
                <img src={twitterLogo} alt="twitter logo" />
              </a>
              <a href="https://www.instagram.com">
                <img src={instagramLogo} alt="Instagram logo" />
              </a>
              <a href="https://www.youtube.com">
                <img src={youtubeLogo} alt="youtube logo" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Useful Links</h4>
            <Link to="/">
              <p>Homepage</p>
            </Link>

            <Link to="/about-us">
              <p>About</p>
            </Link>

            <Link to="/gallery">
              <p>Gallery</p>
            </Link>

            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>

          <div className="footer-links">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <img src={locationLogo} alt="" />
              <p>Alex Cobbinah Street. Opposite New Market</p>
            </div>
            <div className="contact-info">
              <img src={callLogo} alt="" />
              <p>(+233) 000-000-000</p>
            </div>
            <div className="contact-info">
              <img src={messageLogo} alt="" />
              <p>info@baptist.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="copyright-content container">
          © 2024 First Baptist Church. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
