import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import "../../styles/components/_header.scss";
import logo from "../../assets/images/gist-logo.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(null); // Consolidated state for user data and auth status
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowUserMenu(false);
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
          {!user ? (
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
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                  <button className="btn logout" onClick={handleLogout}>
                    Log Out
                  </button>
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
          {!user ? (
            <>
              <li>
                <Link to="/login" className="btn login" onClick={toggleSidebar}>
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn signup"
                  onClick={toggleSidebar}
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button className="btn logout" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          )}
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
