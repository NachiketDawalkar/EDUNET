/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.body.classList.toggle("bg-dark", newMode);
      document.body.classList.toggle("text-white", newMode);
      return newMode;
    });
  };

  // Apply theme on initial render
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">Project Management Tool</Link>

        {/* Navbar Toggler for Mobile View */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Project1</a></li>
                <li><a className="dropdown-item" href="#">Project2</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">View all Projects</a></li>
                <li><a className="dropdown-item" href="#">Create New Project</a></li>
              </ul>
            </li>
            {/* Second Dropdown - Teams */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="teamsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Teams
              </a>
              <ul className="dropdown-menu" aria-labelledby="teamsDropdown">
                <li><a className="dropdown-item" href="#">Team A</a></li>
                <li><a className="dropdown-item" href="#">Team B</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">View all Teams</a></li>
                <li><Link className="dropdown-item" to="/createteam">Create New Team</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <button 
            className="btn btn-outline-secondary btn-sm me-3 px-2 py-1"
            onClick={toggleTheme}>
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>

          {/* Profile Image with Dropdown Menu */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="profileDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                <img 
                  src="https://www.w3schools.com/howto/img_avatar.png" 
                  alt="Profile" 
                  className="rounded-circle" 
                  style={{ width: "40px", height: "40px", objectFit: "cover", marginRight: "10px" }}
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
