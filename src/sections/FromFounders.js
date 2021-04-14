import React from 'react';

const FromFounders = () => (
  <section
    id="from-founders-section"
    style={{ backgroundColor: '#f9f2ec' }}
    className="py-5"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6 position-relative overflow-hidden founders-content">
          <h2 className="fw-bold">Hi! from the founders</h2>
          <div className="position-relative contents">
            <div className="text">
              <p>
                Our goal is to create the best possible coding school at the
                lowest possible cost for students. If we succeed with this,
                it’ll give anyone who wants to become a software developer a
                realistic shot at succeeding. Regardless of where they live and
                the size of their wallets.
              </p>
              <div className="my-3" style={{ borderLeft: 'solid 4px #ebe5ff' }}>
                <h5 className="fw-bold" style={{ marginLeft: '1rem' }}>
                  “To achieve this, we’ve created a new video format for code
                  screencasts. We call it “scrims”.
                </h5>
              </div>
              <p>
                This format is the backbone of our school. Not only because it
                results in a superior learning experience. But also because it
                enables us to iterate more quickly, to attract better teachers,
                to facilitate better peer-learning, to keep server costs low,
                and much more.
              </p>
            </div>
            <img
              className="position-absolute bottom-0"
              style={{
                zIndex: '1',
                maxWidth: '300px',
                width: '45%',
                right: '25%',
                opacity: '.9',
              }}
              src="https://scrimba.com/static/art/shape-lilac.svg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-5 col-11 offset-1 px-xl-5">
          <div className="position-relative">
            <img
              src="https://scrimba.com/static/art/founders.jpg"
              alt="img"
              id="img-founders"
              className="img-fluid"
            />
            <h2 className="text-founders">Sindre & Per</h2>
          </div>
          <p className="mt-4">Connect with us on Twitter</p>
          <button
            className="btn btn-outline-dark d-block mt-2 bg-white"
            style={{ marginLeft: '2rem' }}
          >
            Say Hi @Sindreaars
          </button>
          <button
            className="btn btn-outline-dark d-block mt-2 bg-white"
            style={{ marginLeft: '2rem' }}
          >
            Say Hi @Perborgen
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FromFounders;
