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
    title: 'The Responsive Web Design Bootcamp',
    lessons: '174',
    hours: '15',
    author: 'Kevin Powell',
    level: 'Beginner',
    image: 'https://scrimba.com/avatars/kevin-powell/64',
  },
  {
    title: 'Introduction to HTML',
    lessons: '17',
    hours: 56 / 60,
    author: 'Eric Vida',
    level: 'Beginner',
    image: 'https://scrimba.com/avatars/ericvida/64',
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
];

const HTML = () => (
  <CourseSection
    id="html-section"
    color="#f9f2ec"
    list={list}
    title="HTML"
    subTitle="HTML is how you organise content on a website"
  />
);

export default HTML;
