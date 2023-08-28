import { isStickingChecked } from '../../../../../lib/uiHelpers/menuHelpers';

interface InputProps {
  children: string;
  beatName: string;
  inputType: string;
  labelFor: string;
  onFormChange: (beatName: string, children: string) => void;
  selectedStickings: { [key: string]: string };
  value: string;
}

function MenuInput({
  children,
  beatName,
  inputType,
  labelFor,
  onFormChange,
  selectedStickings,
  value,
}: InputProps) {
  return (
    <label className="stickings" htmlFor={labelFor}>
      <input
        type={inputType}
        id={labelFor}
        name={beatName}
        checked={isStickingChecked(selectedStickings, beatName, children)}
        onChange={() => onFormChange(beatName, children)}
        value={value}
      />
      {children}
    </label>
  );
}

export default MenuInput;
