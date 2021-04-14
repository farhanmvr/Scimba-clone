import React from 'react';
import CourseCard from './CourseCard';
import SeeAllBtn from './SeeAllBtn';

const CourseSection = ({ id = '', title, subTitle, color, list }) => (
  <section id={id} className="py-5" style={{ backgroundColor: color }}>
    <div className="container text-center">
      <h3>
        <u>{title}</u>
      </h3>
      <p>{subTitle}</p>
      <div className="row my-5">
        {list.map((c, i) => (
          <div key={i} className="col-md-6 col-xl-3 col-sm-6 mb-3">
            <CourseCard course={c} />
          </div>
        ))}
      </div>
      <SeeAllBtn />
    </div>
  </section>
);

export default CourseSection;
