import React from 'react';
import './Navbar.css'; // Import the CSS for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">BlogSite</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#technology" className="navbar-link">Technology</a>
          </li>
          <li className="navbar-item">
            <a href="#travel" className="navbar-link">Travel</a>
          </li>
          <li className="navbar-item">
            <a href="#food" className="navbar-link">Food</a>
          </li>
          <li className="navbar-item">
            <a href="#health" className="navbar-link">Health</a>
          </li>
          <li className="navbar-item">
            <a href="#fitness" className="navbar-link">Fitness</a>
          </li>
          <li className="navbar-item">
            <a href="#education" className="navbar-link">Education</a>
          </li>
          <li className="navbar-item">
            <a href="#lifestyle" className="navbar-link">Lifestyle</a>
          </li>
          <li className="navbar-item">
            <a href="#finance" className="navbar-link">Finance</a>
          </li>
          <li className="navbar-item">
            <a href="#music" className="navbar-link">Music</a>
          </li>
          <li className="navbar-item">
            <a href="#movies" className="navbar-link">Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
