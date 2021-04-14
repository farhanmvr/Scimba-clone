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
    title: 'Learn UI Design Fundamentals',
    lessons: '16',
    hours: '1',
    author: 'Kevin Powell',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/designcourse/64',
  },
  {
    title: 'HTML & CSS Crash Course',
    lessons: '31',
    hours: '4',
    author: 'Kevin Powell',
    level: 'Beginner',
    cost: 'free',
    image: 'https://scrimba.com/avatars/kevin-powell/64',
  },
  {
    title: 'Learn Flexbox for free',
    lessons: '14',
    hours: 54 / 60,
    author: 'Per Harald Borgen',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/perborgen/64',
  },
];

const NewToCoding = () => (
  <CourseSection
    id="css"
    color="white"
    list={list}
    title="CSS"
    subTitle="CSS is a style sheet language for designing websites"
  />
);

export default NewToCoding;
