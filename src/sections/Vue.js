import React from 'react';
import CourseSection from '../components/CourseSection';

const list = [
  {
    title: 'The Vue Bootcamp',
    lessons: '81',
    hours: '8',
    author: 'Victor Gonzalez',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/uid/u9Ld9du5/64',
  },
  {
    title: 'Learn Vuetify for free',
    lessons: '18',
    hours: '2',
    author: 'Gwen Faraday',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/uid/uKQ9rWhD/64',
  },
  {
    title: 'Learn Vue.js for free',
    lessons: '12',
    hours: '1',
    author: 'Zaydek Gualtieri',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/zaydek/64',
  },
  {
    title: 'Learn Vuex',
    lessons: '13',
    hours: (58/60).toFixed(2),
    author: 'Connor Lindsey',
    level: 'Intermediate',
    image: 'https://scrimba.com/avatars/connorlindsey/64',
  },
];

const Vue = () => (
  <CourseSection
    id="vue-section"
    color="#f5f5f5"
    list={list}
    title="Vue"
    subTitle="Vue is an approachable, versatile and performant JavaScript framework"
  />
);

export default Vue;
