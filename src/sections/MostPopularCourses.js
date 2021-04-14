import React from 'react';
import CourseSection from '../components/CourseSection';

const MostPopularCourses = () => {
  const list = [
    {
      title: 'The Frontend Developer Career Path',
      lessons: '928',
      hours: '75',
      author: 'Per Harald Borgen',
      level: 'Beginner',
      image: 'https://scrimba.com/avatars/perborgen/64',
    },
    {
      title: 'The React Bootcamp',
      lessons: '128',
      hours: '12',
      author: 'Bob Ziroli',
      level: 'Advanced',
      image: 'https://scrimba.com/avatars/bobziroll/64',
    },
    {
      title: 'Build an Instagram Clone in React',
      lessons: '93',
      hours: '9',
      author: 'Karl Hadwen',
      level: 'Advanced',
      image: 'https://scrimba.com/avatars/uid/u42kLRTV/64',
    },
    {
      title: 'The Responsive Web Design Bootcamp',
      lessons: '174',
      hours: '15',
      author: 'Kevin Powell',
      level: 'Beginner',
      image: 'https://scrimba.com/avatars/kevin-powell/64',
    },
  ];
  return (
    <CourseSection
      id="most-popular-courses"
      color="hsl(28, 52%, 95%)"
      list={list}
      title="Most popular courses"
      subTitle="Get started with these popular intro courses."
    />
  );
};

export default MostPopularCourses;
