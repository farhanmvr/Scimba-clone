import React from 'react';
import Bootcamps from '../sections/Bootcamps';
import Freebies from '../sections/Freebies';
import Header from '../sections/Header';
import HeaderBottom from '../sections/HeaderBottom';
import MostPopularCourses from '../sections/MostPopularCourses';
import NewToCoding from '../sections/NewToCoding';
import CSS from '../sections/CSS';
import JavaScript from '../sections/JavaScript';
import ReactSection from '../sections/ReactSection';
import HTML from '../sections/HTML';
import ComputerScience from '../sections/ComputerScience';
import Vue from '../sections/Vue';
import JoinDiscord from '../sections/JoinDiscord';
import AboutThePlatform from '../sections/AboutThePlatform';
import FromFounders from '../sections/FromFounders';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <MostPopularCourses />
      <Bootcamps />
      <Freebies />
      <NewToCoding />
      <CSS />
      <JavaScript />
      <ReactSection />
      <HTML />
      <ComputerScience />
      <Vue />
      <JoinDiscord />
      <AboutThePlatform />
      <FromFounders />
    </>
  );
};

export default LandingPage;
