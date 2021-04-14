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
    title: 'The JavaScript Bootcamp',
    lessons: '112',
    hours: '13',
    author: 'Reed Barger',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/reedbarger/64',
  },
  {
    title: 'Introduction to JavaScript',
    lessons: '34',
    hours: '1',
    author: 'Dylan C. Israel',
    level: 'Beginner',
    cost: 'free',
    image: 'https://scrimba.com/avatars/PizzaPokerGuy/64',
  },
  {
    title: 'Build a Snake Game in JavaScript',
    lessons: '28',
    hours: '1',
    author: 'Ania Kubow',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/uid/uN32gmcm/64',
  },
];

const JavaScript = () => (
  <CourseSection
    id="css"
    color="#ddeae1"
    list={list}
    title="JavaScript"
    subTitle="JavaScript is the worlds most popular programming language"
  />
);

export default JavaScript;
