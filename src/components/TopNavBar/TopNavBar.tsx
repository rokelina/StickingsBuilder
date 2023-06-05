import NumberInput from './NumberInput';
import './TopNavBar.css';
import MetronomeIcon from '../../assets/icons/MetronomeIcon';
import RepeatIcon from '../../assets/icons/RepeatIcon';

function TopNavBar() {
  return (
    <nav className="metronome-options">
      <NumberInput
        icon={<MetronomeIcon></MetronomeIcon>}
        wrapperName="metronome"
        inputName="met-input"
        minValue={20}
        spanText="BPM"
        defaultCount={90}
      ></NumberInput>
      <NumberInput
        icon={<RepeatIcon></RepeatIcon>}
        wrapperName="repeat"
        inputName="rep-input"
        minValue={1}
        spanText="Repeats"
        defaultCount={4}
      ></NumberInput>
    </nav>
  );
}

export default TopNavBar;
