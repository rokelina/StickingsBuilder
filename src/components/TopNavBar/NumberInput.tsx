import { ReactNode } from 'react';

interface Props {
  logo: ReactNode;
  wrapperName: string;
  inputName: string;
  spanName: string;
  count?: number;
}

function NumberInput({ logo, wrapperName, inputName, spanName, count }: Props) {
  return (
    <div className={wrapperName}>
      {logo}
      <input type="number" className={inputName} defaultValue={count} />
      <span className={inputName}>{spanName}</span>
    </div>
  );
}

export default NumberInput;
