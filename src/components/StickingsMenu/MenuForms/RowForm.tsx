import RowInput from './MenuInputs/RowInput';

interface RowProps {
  permutations: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
  selectedStickings: { [key: string]: string };
}

function RowForm({ permutations, onFormChange, selectedStickings }: RowProps) {
  return (
    <form action="">
      <fieldset id="rows" className="rows">
        <div className="legend">
          <legend>Row</legend>
        </div>
        {Object.values(permutations).map((value) => (
          <RowInput
            inputType="radio"
            key={value + '-' + 'row'}
            rowName={value}
            onFormChange={onFormChange}
            selectedStickings={selectedStickings}
          />
        ))}
      </fieldset>
    </form>
  );
}
export default RowForm;
