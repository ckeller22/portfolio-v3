import amerisaveIcon from '../images/amerisave-icon.jpg';
import harmonyhitIcon from '../images/harmonyhit-icon.jpg';
import content from '../data/content.json';
import { CardInfoItemProps } from './props';

export interface WorkData extends CardInfoItemProps {
  id: string;
}

const work: Array<WorkData> = [
  {
    id: 'harmonyhit2',
    imageSource: harmonyhitIcon,
    title: { value: 'Harmony Healthcare IT', screenReaderTitle: 'Employer' },
    subtitle: {
      value: 'Senior Software Engineer and Dev Lead',
      screenReaderTitle: 'Position',
    },
    time: { value: 'Apr 2025 - Present', screenReaderTitle: 'Dates' },
    url: 'https://www.harmonyhit.com/',
    descriptionList: {
      value: [...content.harmonyhitLeadHighlights],
      screenReaderTitle: 'Highlights',
    },
    technologiesList: {
      value: [...content.harmonyhitLeadTechnologies],
      screenReaderTitle: 'Technologies',
    },
  },
  {
    id: 'harmonyhit',
    imageSource: harmonyhitIcon,
    title: { value: 'Harmony Healthcare IT', screenReaderTitle: 'Employer' },
    subtitle: { value: 'Software Engineer', screenReaderTitle: 'Position' },
    time: { value: 'Jan 2024 - May 2025', screenReaderTitle: 'Dates' },
    url: 'https://www.harmonyhit.com/',
    descriptionList: {
      value: [...content.harmonyhitHighlights],
      screenReaderTitle: 'Highlights',
    },
    technologiesList: {
      value: [...content.harmonyhitTechnologies],
      screenReaderTitle: 'Technologies',
    },
  },
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
