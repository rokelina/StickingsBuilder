interface RowInputProps {
  inputType: string;
  rowName: string;
  onFormChange: (beatName: string, children: string) => void;
  selectedStickings: { [key: string]: string };
}

function RowInput({
  inputType,
  rowName,
  onFormChange,
  selectedStickings,
}: RowInputProps) {
  // to match menuInput children format
  const children: string = rowName.toUpperCase();

  const isChecked = (
    selectedStickings: {
      [key: string]: string;
    },
    children: string
  ): boolean => {
    // current selected stickings values
    const objValues = Object.values(selectedStickings);

    if (
      objValues.length === 4 &&
      new Set(objValues).size === 1 &&
      objValues[0] === children
    ) {
      return true;
    }
    return false;
  };

  return (
    <label className="row-input" htmlFor={rowName}>
      <input
        type={inputType}
        id={rowName}
        checked={isChecked(selectedStickings, children)}
        name="row"
        onChange={() => onFormChange('row', children)}
      />
    </label>
  );
}
export default RowInput;
