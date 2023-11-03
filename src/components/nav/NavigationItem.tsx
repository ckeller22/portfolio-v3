import { AppProps } from '../../model/props';
import { SectionData } from '../../model/sections';

interface NavigationItemProps extends AppProps {
  section: SectionData;
}

function NavigationItem({ section, className = '' }: NavigationItemProps) {
  const classes = `${className} cursor-pointer transition hover:text-teal-400`;

  return (
    <li className={classes}>
      <button type="button">{section.name}</button>
    </li>
  );
}

export default NavigationItem;
