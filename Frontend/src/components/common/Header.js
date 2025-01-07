import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import "../../styles/components/_header.scss";
import logo from "../../assets/images/gist-logo.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Gist Logo" />
          </Link>
          <nav className="navbar">
            <ul className="menu">
              <li>
                <Link to="/discover">Discover</Link>
              </li>
              <li>
                <Link to="/job-seekers">For Job Seekers</Link>
              </li>
              <li>
                <Link to="/companies">For Companies</Link>
              </li>
            </ul>
          </nav>
          {!isLoggedIn ? (
            <div className="auth-buttons">
              <Link to="/login" className="btn login">
                Log In
              </Link>
              <Link to="/signup" className="btn signup">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="user-profile" onClick={toggleUserMenu}>
              <FaUserCircle className="user-icon" />
              {showUserMenu && (
                <div className="user-info-dropdown">
                  <h4>{userData.name}</h4>
                  <p>{userData.email}</p>
                </div>
              )}
            </div>
          )}
          <FaBars className="mobile-menu-icon" onClick={toggleSidebar} />
        </div>
      </header>
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/discover" onClick={toggleSidebar}>
              Discover
            </Link>
          </li>
          <li>
            <Link to="/job-seekers" onClick={toggleSidebar}>
              For Job Seekers
            </Link>
          </li>
          <li>
            <Link to="/companies" onClick={toggleSidebar}>
              For Companies
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn login" onClick={toggleSidebar}>
              Log In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="btn signup" onClick={toggleSidebar}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`overlay ${sidebar ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Header;
