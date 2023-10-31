import resume from '../images/lopez_resume.pdf';
import { schoolIcon, volunteerIcon, workIcon } from './icons';

const navItems = {
  home: '/',
  projects: '/projects',
  blog: '/blog',
  eleven11: '/eleven11',
  resume,
}

export const headerNav = {
  Projects: navItems.projects,
  Blog: navItems.blog,
  Eleven11: navItems.eleven11,
  Resume: navItems.resume
}

export const pageProps = {
  '/': {
    color: 'bg-pink',
    title: 'Haley Lopez',
    subtitle: 'Technologist'
  },
  '/blog': {
    color: 'bg-lime-400',
    title: 'My Mixed Plate',
    pageDescription: 'hello world',
  },
  '/projects': {
    color: 'bg-lilac',
    title: 'Projects',
    pageDescription: 'hello world',
  },
};

export const icons = {
  schoolIcon,
  volunteerIcon,
  workIcon,
};