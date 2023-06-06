import { ReactNode } from 'react';
import './Button.css';

interface Props {
  idName: string;
  children: ReactNode;
  onBtnClick?: () => void;
}

function Button({ idName, children }: Props) {
  return (
    <button className="controls-button" id={idName}>
      {children}
    </button>
  );
}

export default Button;
