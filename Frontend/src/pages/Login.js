import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import "../styles/pages/_login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [popupMessage, setPopupMessage] = useState(""); // State for popup
  const navigate = useNavigate(); // Navigation hook

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
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Show success popup and navigate
      setPopupMessage("User logged in successfully!");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
        })
      );
      setTimeout(() => {
        navigate("/"); // Redirect to homepage
      }, 2000);
    } catch (error) {
      console.error(error);
      setPopupMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {popupMessage && ( // Conditional rendering for popup
        <div className="popup-message">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
