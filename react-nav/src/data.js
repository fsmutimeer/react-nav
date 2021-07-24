import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'HOME',
  },
  {
    id: 2,
    url: '/about',
    text: 'ABOUTUS',
  },
  // {
  //   id: 3,
  //   url: '/projects',
  //   text: 'projects',
  // },
  {
    id: 4,
    url: '/contact',
    text: 'CONTACT',
  },
  {
    id: 4,
    url: '/more',
    text: 'MORE',
  },
  // {
  //   id: 5,
  //   url: '/profile',
  //   text: 'PROFILE',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/fsmutimeer',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com/fsmutimeer',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/fsmutimeer/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com/fsmutimeer/',
    icon: <FaInstagram />,
  },

];
