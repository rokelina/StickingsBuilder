import { ReactNode } from 'react';
import './Button.css';

interface Props {
  idName: string;
  children: ReactNode;
  disabled?: boolean;
  onBtnClick?: () => void;
}

function Button({ idName, children, onBtnClick, disabled }: Props) {
  return (
    <button
      className="controls-button"
      id={idName}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
