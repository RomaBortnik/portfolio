import { nanoid } from 'nanoid';
import { CLOUDINARY_URL } from './education';
import sprite from '../images/icons.svg';

export const projects = [
  {
    id: nanoid(),
    name: 'WebStudio',
    image: `${CLOUDINARY_URL}projects/desktop/webstudio`,
    mobileImage: `${CLOUDINARY_URL}projects/mobile/webstudio-new`,
    altText: 'WebStudio home page',
    descr:
      'A multi-page website of a web development studio. The essence of the project is to create a site that will be cross-browser, with a good assessment of web performance and with adaptive layout support.',
    technologies: 'HTML, SCSS, JS.',
    developedBy: 'Personal',
    media: [
      {
        id: nanoid(),
        link: 'https://github.com/RomaBortnik/goit-markup-hw-08',
        icon: `${sprite}#icon-github`,
        name: 'GitHub',
      },
      {
        id: nanoid(),
        link: 'https://romabortnik.github.io/goit-markup-hw-08/',
        icon: `${sprite}#icon-feed`,
        name: 'Live page',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Mimino',
    image: `${CLOUDINARY_URL}projects/desktop/mimino`,
    mobileImage: `${CLOUDINARY_URL}projects/mobile/mimino-new`,
    altText: 'Mimino home page',
    descr:
      'A multi-page website for restaurant-hotel complex, which consists of themain page, the restaurant page, the hotel page and an additional hotel room page. Functionality of the website allows cosumers to check the menu, order a table in a restaurant or a hotel room.',
    technologies: 'HTML, SCSS, JS.',
    developedBy: 'Team',
    media: [
      {
        id: nanoid(),
        link: 'https://github.com/AndrewKustov1998/mimino',
        icon: `${sprite}#icon-github`,
        name: 'GitHub',
      },
      {
        id: nanoid(),
        link: 'https://andrewkustov1998.github.io/mimino/',
        icon: `${sprite}#icon-feed`,
        name: 'Live page',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'News',
    image: `${CLOUDINARY_URL}projects/desktop/news`,
    mobileImage: `${CLOUDINARY_URL}projects/mobile/news-new`,
    altText: 'News home page',
    descr: `A multi-page website about news from around the world. Users can do not only search and read news, but also filter it by date, add and remove news into "favorites" tab, save their viewing history, check a weather forecast based on user's geolocation etc. `,
    technologies: 'HTML, SCSS, JS, REST API, AJAX.',
    developedBy: 'Team',
    media: [
      {
        id: nanoid(),
        link: 'https://github.com/Boroda-Dmitro/js_ny-times-news',
        icon: `${sprite}#icon-github`,
        name: 'GitHub',
      },
      {
        id: nanoid(),
        link: 'https://boroda-dmitro.github.io/js_ny-times-news/',
        icon: `${sprite}#icon-feed`,
        name: 'Live page',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Task Pro',
    image: `${CLOUDINARY_URL}projects/desktop/taskpro`,
    mobileImage: `${CLOUDINARY_URL}projects/mobile/taskpro-new`,
    altText: 'Task Pro workspace',
    descr:
      'Web application for organise work on your tasks. Users can create boards with cards of  tasks, choosing the priority and deadline for each task, edit their data, boards, cards, etc. It is possible to drag and drop tasks between columns. Users also can changed current theme and filterd cards by priority for each board.',
    technologies:
      'HTML, styled-components, JS, REST API, React, Redux, Node.js, MongoDB.',
    developedBy: 'Team',
    media: [
      {
        id: nanoid(),
        link: 'https://github.com/TikhonenkoVV/bite-todo-react',
        icon: `${sprite}#icon-github`,
        name: 'GitHub',
      },
      {
        id: nanoid(),
        link: 'https://tikhonenkovv.github.io/bite-todo-react/',
        icon: `${sprite}#icon-feed`,
        name: 'Live page',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Phonebook',
    image: `${CLOUDINARY_URL}projects/desktop/phonebook`,
    mobileImage: `${CLOUDINARY_URL}projects/mobile/phonebook-new`,
    altText: 'Phonebook workspace',
    descr:
      'A multi-page application with asynchronous operations, user authorization and page routing. Phonebook includes Home page and Contacts page, provides an opportunity to create and delete contacts. Users can also search their contacts by name.',
    technologies: 'HTML, styled-components, JS, REST API, React, Redux.',
    developedBy: 'Personal',
    media: [
      {
        id: nanoid(),
        link: 'https://github.com/RomaBortnik/goit-react-hw-08-phonebook',
        icon: `${sprite}#icon-github`,
        name: 'GitHub',
      },
      {
        id: nanoid(),
        link: 'https://romabortnik.github.io/goit-react-hw-08-phonebook/',
        icon: `${sprite}#icon-feed`,
        name: 'Live page',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Tweets',
    image: `${CLOUDINARY_URL}projects/desktop/tweets`,
    mobileImage: `${CLOUDINARY_URL}projects/mobile/tweets-new`,
    altText: 'Tweets workspace',
    descr:
      'A multi-page application with asynchronous operations, that includes Home page and Tweets page, provides an opportunity to follow or unfollow the user. Users can also filter them by status. Website also use a pagination.',
    technologies: 'HTML, CSS, JS, REST API, React, Redux.',
    developedBy: 'Personal',
    media: [
      {
        id: nanoid(),
        link: 'https://github.com/RomaBortnik/test-repo',
        icon: `${sprite}#icon-github`,
        name: 'GitHub',
      },
      {
        id: nanoid(),
        link: 'https://romabortnik.github.io/test-repo/',
        icon: `${sprite}#icon-feed`,
        name: 'Live page',
      },
    ],
  },
];
