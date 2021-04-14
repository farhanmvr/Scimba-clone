import React from 'react';
import CourseCard from './CourseCard';

const CourseSection = ({ id = '', color }) => (
  <section id={id} className="mt-4 py-5" style={{ backgroundColor: color }}>
    <div className="container text-center">
      <h3>
        <u>Most popular courses</u>
      </h3>
      <p>Get started with these popular intro courses.</p>
      <div className="row my-5">
        <div className="col-md-6 col-xl-3 col-sm-6 mb-3">
          <CourseCard
            title="The Frontend Developer Career Path"
            lessons="928"
            hours="75"
            author="Per Harald Borgen"
            level="Beginner"
            image="https://scrimba.com/avatars/perborgen/64"
          />
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 mb-3">
          <CourseCard
            title="The React Bootcamp"
            lessons="128"
            hours="12"
            author="Bob Ziroli"
            level="Advanced"
            image="https://scrimba.com/avatars/bobziroll/64"
          />
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 mb-3">
          <CourseCard
            title="Build an Instagram Clone in React"
            lessons="93"
            hours="9"
            author="Karl Hadwen"
            level="Advanced"
            image="https://scrimba.com/avatars/uid/u42kLRTV/64"
          />
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 mb-3">
          <CourseCard
            title="The Responsive Web Design Bootcamp"
            lessons="174"
            hours="15"
            author="Kevin Powell"
            level="Beginner"
            image="https://scrimba.com/avatars/kevin-powell/64"
          />
        </div>
      </div>
      <button
        style={{ borderRadius: '2rem' }}
        className="btn btn-outline-dark bg-white py-1 px-3"
      >
        See All
      </button>
    </div>
  </section>
);

export default CourseSection;
