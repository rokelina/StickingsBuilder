import { ReactNode } from 'react';
import { MenuId } from '../../../App';
// import { NavLink } from 'react-router-dom';

interface Props {
  ariaLabel: string;
  idName: MenuId;
  icon: ReactNode;
  spanText: string;
  onNavClick: (id: MenuId) => void;
}

function ListItem({ ariaLabel, idName, icon, spanText, onNavClick }: Props) {
  return (
    <li className="nav-item" id={idName}>
      {/* <NavLink to={idName}> */}
      <button
        className="nav-link"
        aria-label={ariaLabel}
        onClick={() => onNavClick(idName)}
      >
        {icon}
        <span className="icon-text">{spanText}</span>
      </button>
      {/* </NavLink> */}
    </li>
  );
}

export default ListItem;
