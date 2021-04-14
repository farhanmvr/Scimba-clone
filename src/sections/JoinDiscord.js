import React from 'react';

const JoinDiscord = () => (
  <section
    id="join-discord-section"
    className="position-relative text-center mt-4 pt-5"
    style={{ height: '350px' }}
  >
    <div className="container">
      <img
        className="position-absolute bottom-0 start-0 end-0 mx-auto"
        style={{ height: 'auto', width: '40%', zIndex: '-1' }}
        src="https://scrimba.com/static/art/shape-light-coral.svg"
        alt=""
      />
      <img
        className="position-absolute bottom-0 start-0 end-0 mx-auto"
        style={{ height: 'auto', width: '30%', zIndex: '-1' }}
        src="https://scrimba.com/static/art/shape-coral.svg"
        alt=""
      />
      <img
        className="position-absolute bottom-0 start-0 end-0 mx-auto"
        style={{ height: 'auto', width: '40%', zIndex: '-1' }}
        src="https://scrimba.com/static/art/peep-crowd.svg"
        alt=""
      />
      <h2 className="fw-bold">Join Our Discord chat</h2>
      <p>1,000+ online now</p>
      <button className="btn btn-outline-dark bg-white px-4 py-2">
        Enter Chat
      </button>
    </div>
  </section>
);

export default JoinDiscord;
