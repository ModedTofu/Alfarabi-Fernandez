import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
