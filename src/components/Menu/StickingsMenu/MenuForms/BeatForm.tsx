import { MenuInput } from './MenuInputs/MenuInput';

interface BeatProps {
  beatName: string;
  children: string;
  permutations: { [key: string]: string[] };
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
            children={value[0].toUpperCase()}
            beatName={beatName}
            inputType="radio"
            key={value[0] + value[1]}
            labelFor={value[0] + value[1]}
            onFormChange={onFormChange}
          />
        ))}
      </fieldset>
    </form>
  );
}

export default BeatForm;
