import React from 'react';
import Bootcamps from '../sections/Bootcamps';
import Freebies from '../sections/Freebies';
import Header from '../sections/Header';
import HeaderBottom from '../sections/HeaderBottom';
import MostPopularCourses from '../sections/MostPopularCourses';
import NewToCoding from '../sections/NewToCoding';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <MostPopularCourses />
      <Bootcamps />
      <Freebies />
      <NewToCoding />
    </>
  );
};

export default LandingPage;
