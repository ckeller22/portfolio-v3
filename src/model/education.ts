import { CardInfoItemProps } from './props';
import wguIcon from '../images/wgu-logo.jpeg';
import content from '../data/content.json';

export interface EducationData extends CardInfoItemProps {
  id: string;
}

const education: Array<EducationData> = [
  {
    id: 'wgu',
    imageSource: wguIcon,
    title: {
      value: "Western Governor's University",
      screenReaderTitle: 'School',
    },
    subtitle: {
      value: "Bachelor's of Science, Software Development",
      screenReaderTitle: 'Degree',
    },
    time: { value: 'Jan 2020', screenReaderTitle: 'Date Graduated' },
    url: 'https://www.wgu.edu/',
    technologiesList: {
      value: [...content.wguTechnologies],
      screenReaderTitle: 'Technologies',
    },
  },
];

export default education;
