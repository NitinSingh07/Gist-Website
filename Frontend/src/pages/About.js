import React from "react";
import "../styles/pages/_about.scss";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to <strong>Gist Noida HR Consultant</strong>, your trusted
          partner in connecting talented individuals with exceptional
          opportunities. We specialize in providing a seamless and efficient
          hiring process through our cutting-edge dashboard.
        </p>
        <p>
          Our mission is to bridge the gap between ambitious professionals and
          forward-thinking companies, fostering a thriving ecosystem of growth,
          innovation, and success. At Gist Noida HR Consultant, we believe in
          transparency, efficiency, and collaboration to ensure every hiring
          journey is a success.
        </p>
        <p>
          Join us in transforming the hiring landscape and empowering businesses
          to achieve their goals with the right talent.
        </p>
      </section>
      <footer className="about-footer">
        <p>
          © {new Date().getFullYear()} Gist Noida HR Consultant. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
