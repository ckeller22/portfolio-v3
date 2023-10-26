import { ReactNode } from 'react';
import links from '../../model/links';
import SideBar from '../shared/SideBar';

interface Props {
  children: ReactNode;
  url: string;
}

function Icon({ children, url }: Props) {
  return (
    <a
      className="block fill-current stroke-current stroke-1 content-box w-7 h-7 icon-hover"
      href={url}
    >
      {children}
    </a>
  );
}

function SocialSideBar() {
  const icons = links.map((link) => (
    <Icon key={link.id} url={link.url}>
      {link.svg}
    </Icon>
  ));

  return (
    <SideBar className="left-10">
      <ul className="flex flex-col space-y-5">{icons}</ul>
    </SideBar>
  );
}

export default SocialSideBar;
