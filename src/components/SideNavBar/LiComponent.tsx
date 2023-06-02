import { ReactNode } from 'react';

interface Props {
  idName: string;
  icon: ReactNode;
  onClick?: () => void;
  spanText: string;
}

function LiComponent({ idName, icon, onClick, spanText }: Props) {
  return (
    <li className="nav-item" id={idName}>
      <button className="nav-link" onClick={onClick}>
        {icon}
        <span className="icon-text">{spanText}</span>
      </button>
    </li>
  );
}

export default LiComponent;
