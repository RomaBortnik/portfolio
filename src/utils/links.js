import { nanoid } from 'nanoid';
import sprite from '../images/icons.svg';

export const links = [
  {
    id: nanoid(),
    link: 'https://www.instagram.com/bortnik_roma/',
    icon: `${sprite}#icon-instagram`,
    name: 'Instagram',
  },
  {
    id: nanoid(),
    link: 'https://www.facebook.com/profile.php?id=100015224347792',
    icon: `${sprite}#icon-facebook`,
    name: 'Facebook',
  },
  {
    id: nanoid(),
    link: 'https://www.linkedin.com/in/roman-bortnik/',
    icon: `${sprite}#icon-linkedin`,
    name: 'LinkedIn',
  },
  {
    id: nanoid(),
    link: 'https://github.com/RomaBortnik',
    icon: `${sprite}#icon-github`,
    name: 'GitHub',
  },
  {
    id: nanoid(),
    link: 'mailto:bortnik25051998@gmail.com',
    icon: `${sprite}#icon-envelope`,
    name: 'Gmail',
  },
];
