import React from 'react';
import Bootcamps from '../sections/Bootcamps';
import Header from '../sections/Header';
import HeaderBottom from '../sections/HeaderBottom';
import MostPopularCourses from '../sections/MostPopularCourses';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <MostPopularCourses />
      <Bootcamps />
    </>
  );
};

export default LandingPage;
