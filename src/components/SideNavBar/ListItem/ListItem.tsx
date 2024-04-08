import { ReactNode } from 'react';

interface Props {
  ariaLabel: string;
  idName:
    | 'eighth-notes'
    | 'triplet-notes'
    | 'random-stickings'
    | 'log-in'
    | 'saved-stickings'
    | 'about';
  icon: ReactNode;
  spanText: string;
  onNavClick: (id: string) => void;
}

function ListItem({ ariaLabel, idName, icon, spanText, onNavClick }: Props) {
  return (
    <li className="nav-item" id={idName}>
      <button
        className="nav-link"
        aria-label={ariaLabel}
        onClick={() => onNavClick(idName)}
      >
        {icon}
        <span className="icon-text">{spanText}</span>
      </button>
    </li>
  );
}

export default ListItem;
