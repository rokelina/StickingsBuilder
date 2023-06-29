import RowInput from './MenuInputs/RowInput';

interface RowProps {
  permutations: { [key: string]: string };
  // selectedSticking: { [key: string]: string };
}

function RowForm({ permutations }: RowProps) {
  return (
    <form action="">
      <fieldset id="rows" className="rows">
        <legend>Row</legend>
        {Object.values(permutations).map((value) => (
          <RowInput
            inputType="radio"
            // isChecked={!Object.values(selectedSticking) && false}
            key={value + '-' + 'row'}
            labelFor={value}
          />
        ))}
      </fieldset>
    </form>
  );
}
export default RowForm;
