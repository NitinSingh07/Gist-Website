import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/components/_footer.scss";
import logo from "../../assets/images/gist-logo.png";

const Footer = () => {
  //   const context = useContext(authContext);
  //   const { islogedin, userType } = context;

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle the subscription logic here (e.g., save email to DB or send a request)
    alert("Subscribed for updates!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Subscription */}
        <div className="newsletter">
          <h3>Stay Updated with Notifications</h3>
          <p>Enter your email to receive the latest updates and news.</p>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              required
            />
            <button type="submit">Get Updates</button>
          </form>
        </div>

        {/* Footer Links and Company Info */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="company-info">
            <Link to="/" className="logo">
              <img src={logo} alt="Gist Logo" />
            </Link>
            <p>
              A leading platform connecting job seekers and recruiters. Explore
              new opportunities, build your career, and stay connected.
            </p>
          </div>

          {/* Links */}
          <div className="links">
            <Link to="/About">About Us</Link>
            <Link to="/alljobs">Jobs</Link>
            {/* {islogedin && (
              <>
                {userType === "recruiter" ? (
                  <Link to="/recruiterprofile">Profile</Link>
                ) : (
                  <Link to="/applicantprofile">Profile</Link>
                )}
              </>
            )} */}
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link
              to="/about"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("contact-us");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 500); // Delay to allow the page to load
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          &copy; 2024 Gist-Noida. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
