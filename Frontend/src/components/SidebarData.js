import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <BiIcons.BiStats />,
    cName: 'nav-text',
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <FaIcons.FaDonate />,
    cName: 'nav-text',
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <FiIcons.FiBookmark />,
    cName: 'nav-text',
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: 'nav-text',
  },
];
