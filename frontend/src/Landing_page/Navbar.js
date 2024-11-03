import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar border-bottom navbar-section fixed-top">
      <div className="container">
        <div className="logo">
          <a href="/" class="logo-container">
            <img src="media/images/logob.png" alt="Logo" class="navlogo p-2" />
            <h3 class="logo-text">SoulMitra</h3>
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/login">
                <button type="button" class="btn login-btn fw-bold">
                  Log in
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
