import { v4 as uuidv4 } from 'uuid';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import GitHubIcon from '../components/icons/GitHubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

type IconType = typeof GitHubIcon | typeof LinkedInIcon | typeof TwitterIcon;

type LinkData = {
  id: string;
  name: string;
  url: string;
  svg: React.ReactElement<IconType>;
};

const links: Array<LinkData> = [
  {
    id: uuidv4(),
    name: 'GitHub',
    url: 'https://github.com/ckeller22',
    svg: <GitHubIcon />,
  },
  {
    id: uuidv4(),
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ckeller22/',
    svg: <LinkedInIcon />,
  },
  {
    id: uuidv4(),
    name: 'Twitter',
    url: 'https://twitter.com/the_chrus',
    svg: <TwitterIcon />,
  },
];

export default links;
