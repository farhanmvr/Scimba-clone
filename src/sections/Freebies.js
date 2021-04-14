import React from 'react';
import CourseSection from '../components/CourseSection';

const list = [
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
    title: 'Learn React for free',
    lessons: '59',
    hours: '5',
    author: 'Bob Ziroli',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/bobziroll/64',
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
    title: 'Learn Flexbox for free',
    lessons: '14',
    hours: 54 / 60,
    author: 'Per Harald Borgen',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/perborgen/64',
  },
];

const Freebies = () => (
  <CourseSection
    id="bootcamps"
    color="#ddeae1"
    list={list}
    title="Freebies"
    subTitle="High-quality Scrimba courses that don't cost a dime"
  />
);

export default Freebies;
