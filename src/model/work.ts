import amerisaveIcon from '../images/amerisave-icon.jpg';
import content from '../data/content.json';
import wguLogo from '../images/wgu-logo.jpeg';

export type WorkData = {
  id: string;
  image?: string;
  employer: string;
  position: string;
  duration: string;
  highlights?: Array<string>;
};

const work: Array<WorkData> = [
  {
    id: 'amerisave',
    image: amerisaveIcon,
    employer: 'AmeriSave Mortgage',
    position: 'Software Engineer II',
    duration: 'Feb 2022 - Oct 2023',
    highlights: [...content.amerisaveHighlights],
  },
  {
    id: 'freelance',
    employer: 'Freelance',
    position: 'Full-stack Software Engineer',
    duration: 'April 2020 - Present',
  },
  {
    id: 'wgu',
    image: wguLogo,
    employer: 'Western Governors University',
    position: "Bachelor's of Science, Software Development",
    duration: 'Jan 2020',
  },
];

export default work;
