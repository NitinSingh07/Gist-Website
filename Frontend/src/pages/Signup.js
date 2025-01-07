import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "../styles/pages/_signup.scss";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4000/api/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Show success message
      setPopupMessage("User created successfully!");

      // Redirect to "/" after a delay
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      console.error(error);
      setPopupMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="animated-bg"></div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>

      {popupMessage && ( // Show the popup message
        <div className="popup-message">
          <p>{popupMessage}</p>
        </div>
      )}

      <div className="info-section">
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
      <div className="animated-element"></div>
    </div>
  );
};

export default Signup;
