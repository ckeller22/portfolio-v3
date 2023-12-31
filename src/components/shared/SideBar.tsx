import { AppProps } from '../../model/props';

interface SideBarProps extends AppProps {}

function SideBar({ children, className = '' }: SideBarProps) {
  const classes = `${className} hidden fixed bottom-0 mb-10 flex-col-reverse text-slate-500 2xl:flex`;

  return <div className={classes}>{children}</div>;
}

export default SideBar;
