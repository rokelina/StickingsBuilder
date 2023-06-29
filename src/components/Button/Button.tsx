import { ReactNode } from 'react';
import './Button.css';

interface Props {
  idName: string;
  children: ReactNode;
  onBtnClick?: () => void;
}

function Button({ idName, children, onBtnClick }: Props) {
  return (
    <button className="controls-button" id={idName} onClick={onBtnClick}>
      {children}
    </button>
  );
}

export default Button;
