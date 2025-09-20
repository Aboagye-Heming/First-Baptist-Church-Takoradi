import { useState, useEffect } from "react";
import "./contact-page.css";
import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/insta.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page-container">
      {/* Animated Background Particles */}
      <div className="bg-particles">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Reach out to us with any questions or
          prayer requests.
        </p>
      </section>

      {/* Main Content */}
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-container">
          <div className="form-header">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and we'll respond as soon as possible</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="input-underline"></div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="input-underline"></div>
            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Message subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <div className="input-underline"></div>
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="input-underline"></div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="button-spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          {/* Location Card */}
          <div className="info-card">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2421352508422!2d-1.7560953252737543!3d4.899058839906313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77a02875c0001%3A0x84d184b50f5ae025!2sFirst%20Baptist%20Church!5e0!3m2!1sen!2sgh!4v1720458509968!5m2!1sen!2sgh"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="First Baptist Church Location"
                className="map-iframe"
              ></iframe>
            </div>

            <div className="address-info">
              <div className="address-item">
                <span className="address-icon">📍</span>
                <p>P. O. Box MC 356 Takoradi, Ghana-West Africa</p>
              </div>
              <div className="address-item">
                <span className="address-icon">📞</span>
                <p>+233 20 939 1740</p>
              </div>
              <div className="address-item">
                <span className="address-icon">✉️</span>
                <p>
                  <a
                    href="mailto:firstbaptistchurchtakoradi@gmail.com"
                    title="Send message"
                  >
                    firstbaptistchurchtakoradi@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="social-section">
            <h3>Follow Us</h3>
            <p>Stay connected with our community through social media</p>

            <div className="social-icons">
              <div className="social-item">
                <a
                  href="https://www.facebook.com/firstbaptistchurchTadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={facebookLogo} alt="Facebook" />
                  <span>Facebook</span>
                </a>
              </div>
              <div className="social-item">
                <a
                  href="https://www.instagram.com/firstbaptistchurchtakoradi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={instagramLogo} alt="Instagram" />
                  <span>Instagram</span>
                </a>
              </div>
              <div className="social-item">
                <a
                  href="https://www.tiktok.com/@firstbaptistchurchtadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={tiktokLogo} alt="TikTok" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
