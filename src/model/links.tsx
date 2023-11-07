import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type LinkData = {
  id: string;
  name: string;
  url: string;
  icon: any;
};

const links: Array<LinkData> = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/ckeller22',
    icon: faGithub,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ckeller22/',
    icon: faLinkedin,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:chris.keller.dev@gmail.com',
    icon: faEnvelope,
  },
];

export default links;
