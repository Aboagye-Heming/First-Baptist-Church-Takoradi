import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/insta.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">First Baptist Church Takoradi</h3>
              <p className="footer-tagline">
                Worshipping God, Making Disciples, Serving Humanity
              </p>
            </div>

            <div className="footer-sections">
              <div className="footer-section">
                <h4>Contact Us</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <p>P. O. Box MC 356 Takoradi, Ghana-West Africa</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <p>+233 20 939 1740</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <p>
                      <a
                        href="mailto:firstbaptistchurchtakoradi@gmail.com"
                        title="Send message"
                        className="email-link"
                      >
                        firstbaptistchurchtakoradi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  {/* <li>
                    <Link to="/ministries">Ministries</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/sermons">Sermons</Link>
                  </li> */}
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect With Us</h4>
                <p className="social-intro">
                  Follow us on social media for updates and inspiration
                </p>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.facebook.com/firstbaptistchurchTadi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Facebook page"
                    >
                      <img src={facebookLogo} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/firstbaptistchurchtakoradi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Instagram page"
                    >
                      <img src={instagramLogo} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@firstbaptistchurchtadi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our TikTok page"
                    >
                      <img src={tiktokLogo} alt="TikTok" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              &copy; 2026 First Baptist Church, Takoradi. All rights reserved.
            </p>
            {/* <div className="legal-links">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
