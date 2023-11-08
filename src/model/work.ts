import amerisaveIcon from '../images/amerisave-icon.jpg';
import content from '../data/content.json';
import { CardInfoItemProps } from './props';

export interface WorkData extends CardInfoItemProps {
  id: string;
}

const work: Array<WorkData> = [
  {
    id: 'amerisave',
    imageSource: amerisaveIcon,
    title: { value: 'AmeriSave Mortgage', screenReaderTitle: 'Employer' },
    subtitle: { value: 'Software Engineer II', screenReaderTitle: 'Position' },
    time: { value: 'Feb 2022 - Oct 2023', screenReaderTitle: 'Dates' },
    url: 'https://www.amerisave.com/',
    descriptionList: {
      value: [...content.amerisaveHighlights],
      screenReaderTitle: 'Highlights',
    },
    technologiesList: {
      value: [...content.amerisaveTechnologies],
      screenReaderTitle: 'Technologies',
    },
  },
  {
    id: 'freelance',
    title: { value: 'Freelance', screenReaderTitle: 'Employer' },
    subtitle: {
      value: 'Full-stack Software Engineer',
      screenReaderTitle: 'Employer',
    },
    time: { value: 'April 2020 - Present', screenReaderTitle: 'Employer' },
    technologiesList: {
      value: [...content.freelanceTechnologies],
      screenReaderTitle: 'Technologies',
    },
  },
];

export default work;
