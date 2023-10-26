import { v4 as uuidv4 } from 'uuid';

type ProjectData = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubURL: string;
  liveURL: string | null;
};

const projects: Array<ProjectData> = [
  {
    id: uuidv4(),
    title: 'Portfolio Website v2',
    description: 'This website, built using React and Tailwind.',
    technologies: ['Javascript', 'React', 'Tailwind'],
    githubURL: 'https://github.com/ckeller22/portfolio-v2',
    liveURL: null,
  },
  {
    id: uuidv4(),
    title: 'TixGit',
    description:
      'Scalable microservice app that allows users to sign up to view and purchase event tickets using Stripe API.',
    technologies: ['Express', 'React', 'NextJS', 'Kubernetes'],
    githubURL: 'https://github.com/ckeller22/microservice-ticketing-app',
    liveURL: null,
  },
  {
    id: uuidv4(),
    title: 'Blogr Landing Page',
    description:
      'Responsive landing page, built with React and Tailwind CSS, hosted on Netlify. Solution for Blogr landing page challenge on Frontend Mentor.',
    technologies: ['Javascript', 'React', 'Tailwind', 'Netlify'],
    githubURL: 'https://github.com/ckeller22/blogr-landing-page',
    liveURL: 'https://blogr-landing-page-lilac.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Portfolio Website v1',
    description:
      'First version of my portfolio website with custom CSS. Hosted utlizing Heroku platform.',
    technologies: ['CSS', 'SCSS', 'Javascript', 'PHP'],
    githubURL: 'https://github.com/ckeller22/Portfolio',
    liveURL: 'https://portfolio-chris-keller.herokuapp.com/',
  },
  {
    id: uuidv4(),
    title: 'WGU Term Tracker',
    description:
      'Android application to allow WGU students to plan their terms and course selections. Also allows user to take notes for courses and schedule reminder notifcations for upcoming assessments.',
    technologies: ['Android', 'Java', 'SQLite'],
    githubURL: 'https://github.com/ckeller22/WGU-Term-Tracker',
    liveURL: null,
  },
  {
    id: uuidv4(),
    title: 'WGU CRM',
    description:
      'JavaFX application intended to be used as a customer management system for a fictitious company. Allows users to manage and store both customer and appointment records.',
    technologies: ['Java', 'JavaFX', 'mySQL'],
    githubURL: 'https://github.com/ckeller22/Customer-Management-Software',
    liveURL: null,
  },
];

export default projects;
