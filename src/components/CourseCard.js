import React from 'react';

const CourseCard = ({ title, lessons, hours, author, level, cost = '',image }) => (
  <div className="card course-card">
    <div className="card-img-top position-relative overflow-hidden text-end px-2 d-flex align-items-center">
      <div class="shapes">
        <svg
          className="shape position-absolute"
          style={{
            color: '#fcb962',
            left: '35%',
          }}
          width="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          height="100"
        >
          <path
            fill="currentColor"
            d="M48.3671 4.00414C61.7855 2.7251 76.745 -1.97133 86.4625 9.80638C97.2181 22.8423 100.354 43.9553 96.2873 62.0843C92.4299 79.2819 80.463 91.9101 66.9118 96.9691C55.504 101.228 45.1731 91.3023 34.2907 85.2291C22.5778 78.6925 6.96447 76.7547 3.05352 61.3315C-1.02481 45.2483 7.40784 28.3849 16.8479 16.442C25.0359 6.08323 36.8209 5.10471 48.3671 4.00414Z"
          ></path>
        </svg>
        <svg
          className="shape position-absolute"
          style={{
            right: '-10%',
            color: '#d1e0ff',
          }}
          width="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          height="100"
        >
          <path
            fill="currentColor"
            d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
          ></path>
        </svg>
      </div>
      <h4
        className="fw-bold"
        style={{ color: 'hsl(213deg 31% 37%)', zIndex: '10' }}
      >
        {title}
      </h4>
    </div>
    <div className="card-body text-start pb-0">
      <div className="row card-body-top">
        <div className="col-8">
          <h6>{lessons} lessons | {hours} hours</h6>
          <h6>
            with <span className="fw-bold">{author}</span>
          </h6>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <img
            style={{ height: '2.5rem' }}
            src={image}
            className="rounded-circle"
            alt="img"
          />
        </div>
      </div>
      <div className="row mt-xl-5 mt-3">
        <div className="col-5 mb-0 position-absolute bottom-0">
          <h6>{level}</h6>
        </div>
        <div className="col-5 mb-0">{cost}</div>
      </div>
    </div>
  </div>
);

export default CourseCard;
