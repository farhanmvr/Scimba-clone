import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollState, setScrollState] = useState('top');

  useEffect(() => {
    let listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== 'amir') {
          setScrollState('amir');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  let navClass = 'navbar navbar-expand fixed-top navbar-light pt-2';
  if (scrollState === 'amir') navClass += ' navbar-scroll';

  return (
    <nav className={navClass} style={{ transition: 'all .2s ease-in-out' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i>
            <img
            style={{width:'7rem'}}
              src="https://scrimba.com/static/art/dark-logo.svg"
              alt="logo"
            />
          </i>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item my-auto" id='nav-gopro'>
            <Link to="/" className="nav-link px-3 py-1 btn-primary text-light">
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
          <li className="nav-item" id='nav-signup'>
            <Link to="/" className="nav-link link">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
