import { SectionData } from '../../model/sections';

type NavigationItemProps = {
  section: SectionData;
  className: string;
};

function NavigationItem({ section, className }: NavigationItemProps) {
  const classes = `${
    className || ''
  } cursor-pointer transition hover:text-teal-400`;

  return (
    <li className={classes}>
      <button type="button">{section.name}</button>
    </li>
    // px-3 py-2
  );
}

export default NavigationItem;
