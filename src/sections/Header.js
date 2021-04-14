import React from 'react';

const Header = () => {
  return (
    <header className="container">
      <svg
        viewBox="0 0 328 295"
        width="328"
        height="295"
        fill="none"
        class="header-left-svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M152.5 0C221-1.3 295.8 17.3 319.2 81.6c25.5 70-6.5 148.2-67.8 190.4-56.8 39-131 25.3-186.1-16C13 216.7-14 150.2 7.3 88.4 27.4 29 89.8 1.4 152.4.1z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        viewBox="0 0 199 327"
        width="199"
        height="327"
        fill="none"
        class="header-right-svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M199 152c1 68.2-11.6 143-55 166.2-47.2 25.4-100-6.4-128.4-67.6C-10.7 194-1.5 120 26.4 65.1c26.4-52 71.3-79 113-58 40 20.3 58.6 82.5 59.5 145z"
          fill="currentColor"
        ></path>
      </svg>
      <div className="row">
        <div className="col-lg-7 col-lg-9 p-2">
          <h1 className="head-title">
            Don't spend $15,000 on a coding bootcamp
          </h1>
          <h3>
            Our career path helps motivated students become hireable frontend
            developers for{' '}
            <span className="fw-bold">1% of the cost</span>
          </h3>
          <button className='btn btn-primary mt-xl-4 mt-3'>Try it Out Now!</button>
        </div>
        <div className="col-lg-3">
          <img
            class="header-img"
            src="https://scrimba.com/static/art/peep-guy-macbook.svg"
            alt="computer man standing"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
