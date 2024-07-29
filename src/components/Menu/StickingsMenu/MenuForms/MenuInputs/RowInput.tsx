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
  return (
    <label className="row-input" htmlFor={rowName}>
      <input
        aria-label={`selects ${rowName} for all beats`}
        type={inputType}
        id={rowName}
        checked={isRowChecked(selectedStickings, rowName)}
        name="row"
        onChange={() => onFormChange('row', rowName)}
      />
    </label>
  );
}
export default RowInput;
