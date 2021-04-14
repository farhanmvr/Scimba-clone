import React from 'react';

const Footer = () => (
  <footer className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://scrimba.com/static/art/dark-logo.svg"
            alt="logo"
            className="img-fluid img-logo d-block mb-3"
          />
          <a className="d-block my-md-5 text-dark" href="/">
            Home
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Discord
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Twitter
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Youtube
          </a>
        </div>
        <div className="col-md-2 text-md-end">
          <div className="d-block">
            <h6 className="fw-bold">Resources</h6>
          </div>
          <a className="d-block my-md-5 text-dark" href="/">
            Blog
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            FAQ
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Terms
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Privacy
          </a>
        </div>
        <div className="col-md-2 text-md-end">
          <div className="d-block">
            <h6 className="fw-bold">Courses</h6>
          </div>
          <a className="d-block my-md-5 text-dark" href="/">
            All courses
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Intro courses
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Learn JavaScript
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Learn React
          </a>
        </div>
        <div className="col-md-2 text-md-end">
          <div className="d-block">
            <h6 className="fw-bold">Company</h6>
          </div>
          <a className="d-block my-md-5 text-dark" href="/">
            About us
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Contact us
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Support chat
          </a>
          <a className="d-block my-md-5 text-dark" href="/">
            Gift membership
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
