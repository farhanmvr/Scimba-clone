import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand fixed-top navbar-light mt-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Scrimba
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item my-auto">
            <Link
              to="/"
              className="nav-link px-3 py-1 btn-primary text-light"
            >
              Go Pro!
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link link">
              All Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link link">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link link">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
