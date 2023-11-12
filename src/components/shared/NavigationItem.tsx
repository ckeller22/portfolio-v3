import Link from 'react-scroll/modules/components/Link';
import { AppProps } from '../../model/props';
import { SectionData } from '../../model/sections';

interface NavigationItemProps extends AppProps {
  section: SectionData;
}

function NavigationItem({
  section,
  className = '',
  onClick = undefined,
}: NavigationItemProps) {
  return (
    <li
      className={`${className} hover:text-skin-primary cursor-pointer transition`}
    >
      {section.id === 'resume-section' ? (
        <a href="/assets/christopher-keller-resume-10-26-2023.pdf" download>
          Resume
        </a>
      ) : (
        <Link
          to={section.id}
          smooth
          duration={500}
          offset={-20}
          onClick={onClick}
        >
          {section.name}
        </Link>
      )}
    </li>
  );
}

export default NavigationItem;
