import Link from 'react-scroll/modules/components/Link';
import { AppProps } from '../../model/props';
import { SectionData } from '../../model/sections';

interface NavigationItemProps extends AppProps {
  section: SectionData;
}

function NavigationItem({ section, className = '' }: NavigationItemProps) {
  const classes = `${className} cursor-pointer transition hover:text-skin-primary`;

  return (
    <Link to={section.id} smooth duration={500} offset={-20}>
      <li className={classes}>
        <button type="button">{section.name}</button>
      </li>
    </Link>
  );
}

export default NavigationItem;
