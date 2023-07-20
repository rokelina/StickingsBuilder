interface Props {
  children: string;
  inputName: string;
  minValue: string;
  onValueChange: (value: string) => void;
  value: string;
  wrapperName: string;
}

function NumberInput({
  inputName,
  minValue,
  onValueChange,
  children,
  value,
  wrapperName,
}: Props) {
  return (
    <div className={wrapperName}>
      <input
        type="number"
        name={inputName}
        min={minValue}
        className={inputName}
        onChange={(e) => onValueChange(e.target.value)}
        value={value}
      />
      <span className={inputName}>{children}</span>
    </div>
  );
}

export default NumberInput;
