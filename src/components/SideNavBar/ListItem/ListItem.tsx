import { ReactNode } from 'react';
import { MenuId } from '../../../App';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

interface Props {
  // ariaLabel: string;
  idName: MenuId;
  icon: ReactNode;
  spanText: string;
  // onNavClick: (id: MenuId) => void;
}

function ListItem({ idName, icon, spanText }: Props) {
  return (
    <li className="nav-item" id={idName}>
      <NavLink to={idName} className={'nav-link'}>
        {/* <button
        className="nav-link"
        aria-label={ariaLabel}
        onClick={() => onNavClick(idName)}
      > */}
        {icon}
        <span className="icon-text">{spanText}</span>
        {/* </button> */}
      </NavLink>
    </li>
  );
}

export default ListItem;
