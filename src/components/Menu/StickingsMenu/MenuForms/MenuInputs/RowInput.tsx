import { isRowChecked } from '../../../../../lib/uiHelpers/menuHelpers';

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
  // to match menuInput upper case format (needs to be passed as uppercase to onFormChange)
  const rowLabel: string = rowName.toUpperCase();

  return (
    <label className="row-input" htmlFor={rowName}>
      <input
        aria-label={`selects ${rowName} for all beats`}
        type={inputType}
        id={rowName}
        checked={isRowChecked(selectedStickings, rowLabel)}
        name="row"
        onChange={() => onFormChange('row', rowLabel)}
      />
    </label>
  );
}
export default RowInput;
