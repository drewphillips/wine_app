import React from "react";
import "./Links.css";

const Links = ({ toggleController, isOpen }) => (
  <nav className="navbar navbar-expand-lg bg-light navbar-light">
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={toggleController}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className={!isOpen ? "collapse navbar-collapse" : ""}
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mainnav">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/coursenav">
            Course Nav
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/courses">
            Courses
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Links;
