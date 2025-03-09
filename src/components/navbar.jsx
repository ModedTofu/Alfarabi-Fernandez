import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create a new CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
