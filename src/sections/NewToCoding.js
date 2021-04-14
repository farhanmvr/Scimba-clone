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
    title: 'HTML & CSS Crash Course',
    lessons: '31',
    hours: '4',
    author: 'Kevin Powell',
    level: 'Beginner',
    cost: 'free',
    image: 'https://scrimba.com/avatars/kevin-powell/64',
  },
  {
    title: 'Introduction to JavaScript',
    lessons: '34',
    hours: '1',
    author: 'Dylan C. Israel',
    level: 'Beginner',
    cost:'free',
    image: 'https://scrimba.com/avatars/PizzaPokerGuy/64',
  },
  {
    title: 'The Coding Bootcamp Primer',
    lessons: '65',
    hours: '4',
    author: 'V School',
    level: 'Beginner',
    image: 'https://scrimba.com/avatars/v-school/64',
  },
];

const NewToCoding = () => (
  <CourseSection
    id="new-to-coding"
    color="white"
    list={list}
    title="New To Coding?"
    subTitle="Check out our courses to start you on your journey."
  />
);

export default NewToCoding;
