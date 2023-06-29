import { MenuInput } from './MenuInputs/MenuInput';

interface BeatProps {
  beatName: string;
  children: string;
  checkedRadio: { [key: string]: string };
  permutations: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
  onCheckedRadio: (labelFor: string) => void;
}

function BeatForm({
  beatName,
  children,
  checkedRadio,
  permutations,
  onFormChange,
  onCheckedRadio,
}: BeatProps) {
  return (
    <form action="">
      <fieldset id={beatName} name={beatName}>
        <legend>{children}</legend>
        {Object.values(permutations).map((value) => (
          <MenuInput
            children={value.toUpperCase()}
            beatName={beatName}
            checkedRadio={checkedRadio}
            inputType="radio"
            key={value + '-' + beatName}
            labelFor={value + '-' + beatName}
            onFormChange={onFormChange}
            onCheckRadio={onCheckedRadio}
            value={value}
          />
        ))}
      </fieldset>
    </form>
  );
}

export default BeatForm;
