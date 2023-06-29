interface InputProps {
  children: string;
  beatName: string;
  inputType: string;
  labelFor: string;
  onFormChange: (beatName: string, children: string) => void;
  selectedStickings: { [key: string]: string };
  value: string;
}

export function MenuInput({
  children,
  beatName,
  inputType,
  labelFor,
  onFormChange,
  selectedStickings,
  value,
}: InputProps) {
  const isChecked = (
    selectedStickings: { [key: string]: string },
    beatName: string,
    children: string
  ) => {
    for (const [key, value] of Object.entries(selectedStickings)) {
      if (key === beatName && value === children) {
        return true;
      }
    }
    return false;
  };

  return (
    <label className="stickings" htmlFor={labelFor}>
      <input
        type={inputType}
        id={labelFor}
        name={beatName}
        checked={isChecked(selectedStickings, beatName, children)}
        onChange={() => onFormChange(beatName, children)}
        value={value}
      />
      {children}
    </label>
  );
}
