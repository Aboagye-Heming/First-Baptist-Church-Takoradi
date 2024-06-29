import "./contact-page.css";
import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/insta.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";

const ContactInfo = () => {
  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-details">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              We are here to support you at any time, wherever you are in the
              world. Please don't hesitate to reach out to us whenever you need.
              You can find our church's address details below for your
              convenience.
            </p>
          </div>
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p>
              P. O. Box MC 356 Takoradi, Ghana-West Africa
              <br />
              Phone: +233 20 939 1740
              <br />
              Email:{" "}
              <a
                href="mailto:firstbaptistchurchtakoradi@gmail.com"
                title="Send message"
              >
                firstbaptistchurchtakoradi@gmail.com
              </a>
            </p>
          </div>
          <div >
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
                  href="https://www.facebook.com/firstbaptistchurchTadi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
