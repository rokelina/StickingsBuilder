import RowInput from './MenuInputs/RowInput';

interface RowProps {
  permutations: { [key: string]: string };
}

function RowForm({ permutations }: RowProps) {
  return (
    <form action="">
      <fieldset id="rows" className="rows">
        <legend>Row</legend>
        {Object.values(permutations).map((value) => (
          <RowInput
            inputType="radio"
            key={value + '-' + 'row'}
            labelFor={value}
          />
        ))}
      </fieldset>
    </form>
  );
}
export default RowForm;
