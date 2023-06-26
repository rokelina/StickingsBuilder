import RowInput from './MenuInputs/RowInput';

interface RowProps {
  permutations: { [key: string]: string[] };
}

function RowForm({ permutations }: RowProps) {
  return (
    <form action="">
      <fieldset id="rows" className="rows">
        <legend>Row</legend>
        {Object.values(permutations).map((value) => (
          <RowInput
            inputType="radio"
            key={value[0] + value[1]}
            labelFor={value[0] + value[1]}
          />
        ))}
      </fieldset>
    </form>
  );
}
export default RowForm;
