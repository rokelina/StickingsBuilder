interface Props {
  checked: boolean;
  children: string;
  disabled?: boolean;
  id: string;
  onOptionsChange: (id: string, checked: boolean) => void;
}

function OptionsInput({
  children,
  checked,
  disabled,
  id,
  onOptionsChange,
}: Props) {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name="options"
        checked={checked}
        onChange={(e) => onOptionsChange(id, e.target.checked)}
        disabled={disabled}
      />
      {children}
    </label>
  );
}

export default OptionsInput;
