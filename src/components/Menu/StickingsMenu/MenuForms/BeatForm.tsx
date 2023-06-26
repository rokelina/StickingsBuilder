import { MenuInput } from './MenuInputs/MenuInput';

interface BeatProps {
  beatName: string;
  children: string;
  permutations: { [key: string]: string[] };
}

function BeatForm({ beatName, children, permutations }: BeatProps) {
  return (
    <form action="">
      <fieldset id={beatName} name={beatName}>
        <legend>{children}</legend>
        {Object.values(permutations).map((value) => (
          <MenuInput
            children={value[0].toUpperCase()}
            beatName={beatName}
            inputType="radio"
            key={value[0] + value[1]}
            labelFor={value[0] + value[1]}
          />
        ))}
      </fieldset>
    </form>
  );
}

export default BeatForm;
