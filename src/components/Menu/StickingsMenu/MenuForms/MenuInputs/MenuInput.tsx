interface InputProps {
  children: string;
  beatName: string;
  inputType: string;
  labelFor: string;
}

export function MenuInput({
  children,
  beatName,
  inputType,
  labelFor,
}: InputProps) {
  return (
    <label className="stickings" htmlFor={labelFor}>
      <input type={inputType} id={labelFor} name={beatName} />
      {children}
    </label>
  );
}
