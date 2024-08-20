import { SubdivisionOption } from '../../hooks/useGenerateStickings';

interface Props {
  checked: boolean;
  children: string;
  disabled?: boolean;
  id: SubdivisionOption;
  onOptionsChange: (id: SubdivisionOption, checked: boolean) => void;
}

function SubdivisionsInput({
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

export default SubdivisionsInput;
