import { ReactNode } from 'react';
import './NavBar.css';

interface Props {
  children?: ReactNode;
  classname: string;
}

function NavBar({ children, classname }: Props) {
  return <nav className={classname}>{children}</nav>;
}

export default NavBar;
