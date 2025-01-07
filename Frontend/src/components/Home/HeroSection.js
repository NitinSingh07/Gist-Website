import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/pages/_home.scss"; // Import your custom styles for HeroSection
import ban1 from "../../assets/images/ban-1.png";
import ban2 from "../../assets/images/ban-2.png";
import ban3 from "../../assets/images/ban-3.png";
import ban4 from "../../assets/images/ban-4.png";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "slider-wrapper", // Add a custom class for styling
  };

  return (
    <div className="hero-section">
      <div className="slider-container">
        <Slider {...settings} className="slider-wrapper">
          <div className="item">
            <img src={ban1} alt="" />
          </div>
          <div className="item">
            <img src={ban2} alt="" />
          </div>
          <div className="item">
            <img src={ban3} alt="" />
          </div>
          <div className="item">
            <img src={ban4} alt="" />
          </div>
        </Slider>
        <div className="content">
          <div className="inner-content">
            <div>
              <h3>We’re</h3>
              <h1>
                Recruiting Globaly
              </h1>
              <div className="social-box">
                <a
                  href="https://www.facebook.com/profile.php?id=100067194162471"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF/>
                </a>
                <a
                  href="https://www.instagram.com/globalnurseforce/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/GNFNurses"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/global-nurse-force/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/c/GlobalNurseForce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom">
        
      </div>
    </div>
  );
};

export default HeroSection;
