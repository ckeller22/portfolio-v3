import amerisaveIcon from '../images/amerisave-icon.jpg';

export type WorkData = {
  id: string;
  image: string;
  employer: string;
  position: string;
  duration: string;
};

const work: Array<WorkData> = [
  {
    id: 'amerisave',
    image: amerisaveIcon,
    employer: 'AmeriSave Mortgage',
    position: 'Software Engineer II',
    duration: 'Feb 2022 - Oct 2023',
  },
];

export default work;
