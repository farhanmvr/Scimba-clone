import React from 'react';

const HeaderBottom = () => (
  <section id="header-bottom" className="container mt-xl-5">
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center">
        <img
          className="img-fluid"
          style={{ height: '10rem',width:'auto' }}
          src="https://scrimba.com/static/art/peep-girl-wheelchair.svg"
          alt="man"
        />
        <img
          className="img-fluid"
          style={{ height: '10rem',width:'auto' }}
          src="https://scrimba.com/static/art/peep-man-bearded.svg"
          alt="man"
        />
      </div>
      <div className="col-md-4">
        <h4 className="fw-bold head-line">A coding community like no other</h4>
        <p className="mt-3">
          Not a boring forum. But live events, stand-ups, competitions, and
          more.
        </p>
      </div>
      <div className="col-md-4">
        <h4 className="fw-bold head-line">
          A mind-blowing way to learn to code
        </h4>
        <p className="mt-3">
          Our interactive code-learning tool has{' '}
          <span>
            <a href="/">been blowing</a>
          </span>{' '}
          minds since 2017.
        </p>
      </div>
    </div>
  </section>
);

export default HeaderBottom;
