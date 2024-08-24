import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', displayText: 'home' },
  { id: 2, href: '#about', displayText: 'about' },
  { id: 3, href: '#services', displayText: 'services' },
  { id: 4, href: '#tours', displayText: 'tours' },
];

export const SocialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    displayText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    displayText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    displayText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    tourDate: 'august 26th, 2020',
    title: 'Tibet Adventure',
    displayText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    imgVar: tour1,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    tourDate: 'october 1th, 2020',
    title: 'best of java',
    displayText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    imgVar: tour2,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    tourDate: 'september 15th, 2020',
    title: 'explore hong kong',
    displayText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    imgVar: tour3,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    tourDate: 'december 5th, 2019',
    title: 'kenya highlights',
    displayText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    imgVar: tour4,
    location: 'kenya',
    duration: 20,
    cost: '3300',
  },
];
