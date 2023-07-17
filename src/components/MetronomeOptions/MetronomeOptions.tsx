import NumberInput from './NumberInput/NumberInput';
import MetronomeIcon from '../../assets/icons/MetronomeIcon';
import RepeatIcon from '../../assets/icons/RepeatIcon';
import './MetronomeOptions.css';

interface Props {
  onBpmChange: (value: string) => void;
  onRepeatChange: (value: string) => void;
  bpmValue: string;
  repeatValue: string;
}

function MetronomeOptions({
  onBpmChange,
  onRepeatChange,
  bpmValue,
  repeatValue,
}: Props) {
  return (
    <nav className="metronome-options">
      <NumberInput
        icon={<MetronomeIcon></MetronomeIcon>}
        wrapperName="metronome"
        inputName="met-input"
        minValue="20"
        children="BPM"
        onValueChange={onBpmChange}
        value={bpmValue}
      ></NumberInput>
      <NumberInput
        icon={<RepeatIcon></RepeatIcon>}
        wrapperName="repeat"
        inputName="rep-input"
        minValue="1"
        children="Repeats"
        onValueChange={onRepeatChange}
        value={repeatValue}
      ></NumberInput>
    </nav>
  );
}

export default MetronomeOptions;
