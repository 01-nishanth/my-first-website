import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import InstructorsPage from './pages/InstructorsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'Classes',
    path: '/classes',
    element: <ClassesPage />
  },
  {
    name: 'Instructors',
    path: '/instructors',
    element: <InstructorsPage />
  },
  {
    name: 'About',
    path: '/about',
    element: <AboutPage />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />
  }
];

export default routes;
