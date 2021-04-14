import React from 'react';
import CourseSection from '../components/CourseSection';

const list = [
  {
    title: 'Learn Python for free',
    lessons: '59',
    hours: '5',
    author: 'Olof Paulson',
    level: 'Beginner',
    image: 'https://scrimba.com/avatars/uid/uQWnMDTk/64',
  },
  {
    title: 'Practical math for frontend developers',
    lessons: '15',
    hours: '1',
    author: 'Ryan Gonyon',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/Radical-Coder/64',
  },
  {
    title: 'Learn Merge Sort in JavaScript',
    lessons: '10',
    hours: '58',
    author: 'Jonathan Lee Martin',
    level: 'Advanced',
    image: 'https://scrimba.com/avatars/nybblr/64',
  },
  {
    title: 'Learn Binary Search in JavaScript',
    lessons: '11',
    hours: '1',
    author: 'Jonathan Lee Martin',
    cost:'free',
    level: 'Advanced',
    image: 'https://scrimba.com/avatars/nybblr/64',
  },
];

const ComputerScience = () => (
  <CourseSection
    id="cs-section"
    color="white"
    list={list}
    title="Computer Science"
    subTitle="Some courses to level up your computer science skills"
  />
);

export default ComputerScience;
