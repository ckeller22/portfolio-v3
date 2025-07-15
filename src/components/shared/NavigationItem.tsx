import Link from 'react-scroll/modules/components/Link';
import { AppProps } from '../../model/props';
import { SectionData } from '../../model/sections';
import resume from '../../model/resume';

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
      className={`${className} cursor-pointer transition hover:text-skin-primary`}
    >
      {section.id === 'resume-section' ? (
        <a href={resume} download>
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
