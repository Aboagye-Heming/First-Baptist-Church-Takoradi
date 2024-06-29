import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/insta.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Contact Us */}
          <div className="contact">
            <h3>Contact Us</h3>
            <p>
              P. O. Box MC 356 Takoradi, Ghana-West Africa
              <br />
              Phone: +233 27 774 2296
              <br />
              Email:{" "}
              <a href="mailto:info@tis-takoradi.com" title="Send message">
                firstbaptistchurchtakoradi@gmail.com
              </a>
            </p>
          </div>
          {/* Social Icons */}
          <div className="social">
            <h3>Connect with Us</h3>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.tiktok.com/@firstbaptistchurchtadi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tiktokLogo} alt="TikTok" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/firstbaptistchurchtakoradi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2FfirstbaptistchurchTadi%3Fmibextid%3DLQQJ4d&e=AT38M9qTf2eCf1sOCJiXchQoZqD3Vl7SXOrUYYDJ-eScrJ7Z0d6ouBDJgh3eexzxJEmQDmPJLNF2xuuAu8PXkQT-bDdkjtx45oM0Ag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Legal */}
      <div className="legal">
        <div className="container">
          <p>&copy; 2024 First Baptist Church Takoradi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
