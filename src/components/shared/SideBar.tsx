import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className: string;
}

function SideBar({ children, className }: Props) {
  const classes = `${
    className || ''
  }hidden fixed bottom-0 mb-10 flex-col-reverse text-white 2xl:flex`;

  return <div className={classes}>{children}</div>;
}

export default SideBar;