import { ReactNode } from 'react';
import { RouteId } from '../SideNavBar';
import { NavLink } from 'react-router-dom';

interface Props {
  ariaLabel: string;
  icon: ReactNode;
  idName: RouteId;
  spanText: string;
}

function ListItem({ ariaLabel, icon, idName, spanText }: Props) {
  return (
    <li className="nav-item" id={idName}>
      <NavLink to={idName} className={'nav-link'} aria-label={ariaLabel}>
        {icon}
        <span className="icon-text">{spanText}</span>
      </NavLink>
    </li>
  );
}

export default ListItem;
