import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  wrapperName: string;
  inputName: string;
  spanText: string;
  defaultCount?: number;
}

function NumberInput({
  icon,
  wrapperName,
  inputName,
  spanText,
  defaultCount,
}: Props) {
  return (
    <div className={wrapperName}>
      {icon}
      <input type="number" className={inputName} defaultValue={defaultCount} />
      <span className={inputName}>{spanText}</span>
    </div>
  );
}

export default NumberInput;
