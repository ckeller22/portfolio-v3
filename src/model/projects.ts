export type ProjectData = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubURL: string;
  liveURL?: string;
};

const projects: Array<ProjectData> = [
  {
    id: 'portfolio-v3',
    title: 'Portfolio Website v3',
    description: 'This website, built using Typescript, React, and Tailwind.',
    technologies: ['TypeScript', 'React', 'Radix UI', 'Tailwind', 'Vite'],
    githubURL: 'https://github.com/ckeller22/portfolio-v2',
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website v2',
    description: 'Previous portfolio website, built using React and Tailwind.',
    technologies: ['Javascript', 'React', 'Tailwind', 'Netlify'],
    githubURL: 'https://github.com/ckeller22/portfolio_v2',
  },
  {
    id: 'tixgit',
    title: 'TixGit',
    description:
      'Scalable microservice app that allows users to sign up to view, purchase, and sell event tickets using Stripe API.',
    technologies: [
      'TypeScript',
      'Microservices',
      'Express',
      'React',
      'NextJS',
      'Kubernetes',
      'Azure',
    ],
    githubURL: 'https://github.com/ckeller22/microservice-ticketing-app',
  },
  {
    id: 'blogr',
    title: 'Blogr Landing Page',
    description:
      'Responsive landing page, built with React and Tailwind CSS, hosted with Vercel. Solution for Blogr landing page challenge on Frontend Mentor.',
    technologies: ['Javascript', 'React', 'Tailwind', 'Vercel'],
    githubURL: 'https://github.com/ckeller22/blogr-landing-page',
    liveURL: 'https://blogr-landing-page-lilac.vercel.app/',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio Website v1',
    description:
      'First version of my portfolio website with custom CSS. Previously hosted on Heroku.',
    technologies: ['CSS', 'SCSS', 'Javascript', 'PHP', 'Heroku'],
    githubURL: 'https://github.com/ckeller22/Portfolio',
  },
  {
    id: 'wgu-term-tracker',
    title: 'WGU Term Tracker',
    description:
      'Android application to allow WGU students to plan their terms and course selections. Also allows user to take notes for courses and schedule reminder notifcations for upcoming assessments.',
    technologies: ['Android', 'Java', 'SQLite'],
    githubURL: 'https://github.com/ckeller22/WGU-Term-Tracker',
  },
  {
    id: 'wgu-crm',
    title: 'WGU CRM',
    description:
      'JavaFX application intended to be used as a customer management system for a fictitious company. Allows users to manage and store both customer and appointment records.',
    technologies: ['Java', 'JavaFX', 'mySQL'],
    githubURL: 'https://github.com/ckeller22/Customer-Management-Software',
  },
];

export default projects;
