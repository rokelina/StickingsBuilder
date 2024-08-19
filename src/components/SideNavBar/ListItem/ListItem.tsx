import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  ariaLabel: string;
  icon: ReactNode;
  routeName: string;
  spanText: string;
}

function ListItem({ ariaLabel, icon, routeName, spanText }: Props) {
  return (
    <li className="nav-item">
      <NavLink to={routeName} className={'nav-link'} aria-label={ariaLabel}>
        {icon}
        <span className="icon-text">{spanText}</span>
      </NavLink>
    </li>
  );
}

export default ListItem;
