import React from 'react';
import CourseSection from '../components/CourseSection';

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
    title: 'The Responsive Web Design Bootcamp',
    lessons: '174',
    hours: '15',
    author: 'Kevin Powell',
    level: 'Beginner',
    image: 'https://scrimba.com/avatars/kevin-powell/64',
  },
  {
    title: 'The UI Design Bootcamp',
    lessons: '97',
    hours: '8',
    author: 'Gary Simon',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/designcourse/64',
  },
];

const Bootcamps = () => (
  <CourseSection
    id="bootcamps"
    color="#fffbd4"
    list={list}
    title="Bootcamps"
    subTitle="Comprehensive courses on various topics"
  />
);

export default Bootcamps;
