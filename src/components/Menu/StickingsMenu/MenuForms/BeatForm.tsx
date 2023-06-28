import { MenuInput } from './MenuInputs/MenuInput';

interface BeatProps {
  beatName: string;
  children: string;
  permutations: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
}

function BeatForm({
  beatName,
  children,
  permutations,
  onFormChange,
}: BeatProps) {
  return (
    <form action="">
      <fieldset id={beatName} name={beatName}>
        <legend>{children}</legend>
        {Object.values(permutations).map((value) => (
          <MenuInput
            children={value.toUpperCase()}
            beatName={beatName}
            inputType="radio"
            key={value + '-' + beatName}
            labelFor={value + '-' + beatName}
            onFormChange={onFormChange}
            value={value}
          />
        ))}
      </fieldset>
    </form>
  );
}

export default BeatForm;
