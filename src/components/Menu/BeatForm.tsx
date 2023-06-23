import { MenuInput } from './MenuInput';

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
        {Object.keys(permutations).map((perm, index) => (
          <MenuInput
            children={perm.toUpperCase()}
            beatName={beatName}
            inputType="radio"
            key={index}
            labelFor={perm + index}
          />
        ))}
      </fieldset>
    </form>
  );
}

export default BeatForm;
