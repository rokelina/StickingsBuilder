interface InputProps {
  children: string;
  checkedRadio: { [key: string]: string };
  beatName: string;
  inputType: string;
  labelFor: string;
  onFormChange: (beatName: string, children: string) => void;
  onCheckRadio: (labelFor: string) => void;
  value: string;
}

export function MenuInput({
  children,
  checkedRadio,
  beatName,
  inputType,
  labelFor,
  onFormChange,
  onCheckRadio,
  value,
}: InputProps) {
  const { isChecked } = checkedRadio;

  return (
    <label className="stickings" htmlFor={labelFor}>
      <input
        type={inputType}
        id={labelFor}
        checked={isChecked === labelFor}
        name={beatName}
        onChange={() => {
          onFormChange(beatName, children), onCheckRadio(labelFor);
        }}
        value={value}
      />
      {children}
    </label>
  );
}
