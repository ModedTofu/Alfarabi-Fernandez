import React from "react";
import "./Navbar.css";

const Navbar = ({ setShowAbout }) => {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a> {/* Home is now clickable */}
        </li>
        <li>
          <a href="#" onClick={() => setShowAbout((prev) => !prev)}>About</a> {/* Toggles About Us */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
