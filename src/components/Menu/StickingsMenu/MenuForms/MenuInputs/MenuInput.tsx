interface InputProps {
  children: string;
  beatName: string;
  inputType: string;
  labelFor: string;
  onFormChange: (beatName: string, children: string) => void;
}

export function MenuInput({
  children,
  beatName,
  inputType,
  labelFor,
  onFormChange,
}: InputProps) {
  return (
    <label className="stickings" htmlFor={labelFor}>
      <input
        type={inputType}
        id={labelFor}
        name={beatName}
        onChange={() => onFormChange(beatName, children)}
      />
      {children}
    </label>
  );
}
