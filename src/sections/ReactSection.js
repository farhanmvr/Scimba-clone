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
    title: 'Learn React for free',
    lessons: '59',
    hours: '5',
    author: 'Bob Ziroli',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/bobziroll/64',
  },
  {
    title: 'Building Reusable React',
    lessons: '31',
    hours: '4',
    author: 'Cassidy Williams',
    level: 'Advanced',
    image: 'https://scrimba.com/avatars/cassidoo/64',
  },
];

const ReactSection = () => (
  <CourseSection
    id="react-section"
    color="white"
    list={list}
    title="React"
    subTitle="React is the worlds most popular library for building user interfaces"
  />
);

export default ReactSection;
