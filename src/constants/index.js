import resume from '../assets/haleylopez-resume.pdf';
import {
  copyrightIcon,
  hamburgerIcon,
  schoolIcon,
  volunteerIcon,
  workIcon
} from './icons';

const navItems = {
  home: '/',
  projects: '/projects',
  contact: '/contact',
  resume,
  // services: '/services'
}

export const headerNav = {
  Projects: navItems.projects,
  Resume: navItems.resume,
  Contact: navItems.contact,
}

export const pageProps = {
  '/': {
    color: 'bg-forest-green',
    title: 'HALEY LOPEZ',
    subtitle: 'TECHNOLOGIST'
  },
  '/projects': {
    color: 'bg-green',
    title: 'Projects',
  },
};

export const footerLinks = {
  navigation: navItems,
  extras: {
    linkedIn: 'https://www.linkedin.com/in/haleyalopez/',
    bookshelf: 'https://literal.club/haleylopez'
  },
}

export const icons = {
  hamburgerIcon,
  copyrightIcon,
  schoolIcon,
  volunteerIcon,
  workIcon,
};