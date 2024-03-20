import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TechVerse
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/universes" className="nav-link">
              Universes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              User Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
