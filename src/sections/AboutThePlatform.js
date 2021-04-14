import React from 'react';

const AboutThePlatform = () => (
  <section
    id="about-platform-section"
    style={{ backgroundColor: '#f9f2ec' }}
    className="py-5"
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-6 px-xl-5 d-flex justify-content-center">
          <img
            src="https://scrimba.com/static/art/about-video-cover.jpg"
            alt="img"
            className="img-fluid"
            style={{ border: 'solid 4px hsla(0.00,0.00%,100.00%,100%)' }}
          />
        </div>
        <div className="col-sm-6 position-relative overflow-hidden right-section pt-4">
          <h2 className="fw-bold">About the platform</h2>
          <div className="text">
            <p>
              Scrimba is the next-generation platform for learning how to code.
              Our screencasts enable you to interact with the code directly in
              the player. This way, you'll have more fun and learn faster.
            </p>
            <p>
              Our courses cover subjects like HTML, CSS, JavaScript, React, Vue,
              and more. They're all made with the goal of advancing your career.
              So pick a course and give your career a boost!
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
            src="https://scrimba.com/static/art/shape-baby.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutThePlatform;
