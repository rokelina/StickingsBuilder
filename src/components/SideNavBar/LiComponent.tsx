import { ReactNode } from 'react';

interface Props {
  idName: string;
  icon: ReactNode;
  spanText: string;
  onNavClick: (id: string) => void;
}

function LiComponent({ idName, icon, spanText, onNavClick }: Props) {
  return (
    <li className="nav-item" id={idName}>
      <button className="nav-link" onClick={() => onNavClick(idName)}>
        {icon}
        <span className="icon-text">{spanText}</span>
      </button>
    </li>
  );
}

export default LiComponent;
