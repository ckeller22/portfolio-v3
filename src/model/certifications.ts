import { CardInfoItemProps } from './props';
import ciwLogo from '../images/ciw-logo.png';
import comptiaLogo from '../images/comptia-logo.png';
import microsoftLogo from '../images/microsoft-logo.jpg';

export interface CertificationData extends CardInfoItemProps {
  id: string;
}

const certifications: Array<CertificationData> = [
  {
    id: 'mta-app-dev',
    imageSource: microsoftLogo,
    title: {
      value: 'Microsoft',
      screenReaderTitle: 'Vendor',
    },
    subtitle: {
      value: 'MTA 98-375: HTML5 Application Development Fundamentals',
      screenReaderTitle: 'Certification',
    },
  },
  {
    id: 'ciw-ui',
    imageSource: ciwLogo,
    title: {
      value: 'CIW',
      screenReaderTitle: 'Vendor',
    },
    subtitle: {
      value: 'User Interface Designer',
      screenReaderTitle: 'Certification',
    },
    url: 'https://ciwcertified.com/ciw-certifications/web-and-mobile-design-series/user-interface-designer',
  },
  {
    id: 'ciw-advanced',
    imageSource: ciwLogo,
    title: {
      value: 'CIW',
      screenReaderTitle: 'Vendor',
    },
    subtitle: {
      value: 'Advanced HTML5 & CSS3 Specialist',
      screenReaderTitle: 'Certification',
    },
    url: 'https://www.ciwcertified.com/ciw-certifications/web-and-mobile-design-series/advanced-html5-and-css3-specialist',
  },
  {
    id: 'comptia-project-plus',
    imageSource: comptiaLogo,
    title: {
      value: 'CompTIA',
      screenReaderTitle: 'Vendor',
    },
    subtitle: {
      value: 'Project+',
      screenReaderTitle: 'Certification',
    },
    url: 'https://www.comptia.org/certifications/project',
  },
  {
    id: 'comptia-a-plus',
    imageSource: comptiaLogo,
    title: {
      value: 'CompTIA',
      screenReaderTitle: 'Vendor',
    },
    subtitle: {
      value: 'A+',
      screenReaderTitle: 'Certification',
    },
    url: 'https://www.comptia.org/certifications/a',
  },
];

export default certifications;
