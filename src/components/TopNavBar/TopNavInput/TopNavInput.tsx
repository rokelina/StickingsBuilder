import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  wrapperName: string;
  inputName: string;
  minValue: number;
  spanText: string;
  defaultCount?: number;
}

function NumberInput({
  icon,
  wrapperName,
  inputName,
  minValue,
  spanText,
  defaultCount,
}: Props) {
  return (
    <div className={wrapperName}>
      {icon}
      <input
        type="number"
        name={inputName}
        min={minValue}
        className={inputName}
        defaultValue={defaultCount}
      />
      <span className={inputName}>{spanText}</span>
    </div>
  );
}

export default NumberInput;
