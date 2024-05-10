import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} First Baptist Church,Takoradi. All rights
        reserved. |
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>
        |
        <a href="/terms" className="footer-link">
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
