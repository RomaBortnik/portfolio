import { nanoid } from 'nanoid';
import sprite from '../images/icons.svg';

export const skills = [
  {
    id: nanoid(),
    icon: `${sprite}#icon-html`,
    name: 'html',
    color: '#c04332',
    description:
      'Creation of structured and accessible websites for users using HTML.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-css`,
    name: 'css',
    color: '#3234c0',
    description:
      'Styling, formatting and animation web applications using CSS.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-sass`,
    name: 'sass',
    color: '#474380',
    description:
      'Adding additional features and capabilities for creating styles using SASS.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-javascript`,
    name: 'javascript',
    color: '#d8d404',
    description:
      'Adding functionality to websites using JavaScript and JS libraries.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-react`,
    name: 'react',
    color: '#474380',
    description: 'Creating applications without reloading page using React.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-redux`,
    name: 'redux',
    color: '#503c66',
    description: 'Using Redux for saving global state for React applications.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-node`,
    name: 'node',
    color: '#8f8f8d',
    description: 'Using Node.js for server-side programming.',
  },

  {
    id: nanoid(),
    icon: `${sprite}#icon-mongo`,
    name: 'mongodb',
    color: '#8f8f8d',
    description: 'Development of simple databases using MongoDB.',
  },
];
