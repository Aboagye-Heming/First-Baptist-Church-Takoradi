import "./contact-page.css";
import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/insta.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";

const ContactInfo = () => {
  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
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
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-details">
          {/* <div className="contact-info">
            <h3>Contact Details</h3>
            <p>
              P. O. Box MC 356 Takoradi, Ghana-West Africa
              <br />
              Phone: +233 20 939 1740
              <br />
              Email:{" "}
              <a href="mailto:firstbaptistchurchtakoradi@gmail.com" title="Send message">
                firstbaptistchurchtakoradi@gmail.com
              </a>
            </p>
          </div> */}
       
          <div className="map">
            <h3>Our Location</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2421352508422!2d-1.7560953252737543!3d4.899088839906313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77a02875c0001%3A0x84d184b50f5ae025!2sFirst%20Baptist%20Church!5e0!3m2!1sen!2sgh!4v1720458509968!5m2!1sen!2sgh" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="contact-info">
            <h3>Connect with Us</h3>
            <ul className="social-iconss">
              <li>
                <a href="https://www.tiktok.com/@firstbaptistchurchtadi" target="_blank" rel="noopener noreferrer">
                  <img src={tiktokLogo} alt="TikTok" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/firstbaptistchurchtakoradi/" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/firstbaptistchurchTadi" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ContactInfo;
