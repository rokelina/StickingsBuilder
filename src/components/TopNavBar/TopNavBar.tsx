import NavBar from '../NavBar/NavBar';
import NumberInput from './NumberInput';
import './TopNavBar.css';
import MetronomeIcon from '../../assets/icons/MetronomeIcon';
import RepeatIcon from '../../assets/icons/RepeatIcon';

function TopNavBar() {
  return (
    <NavBar classname="metronome-options">
      <NumberInput
        logo={<MetronomeIcon></MetronomeIcon>}
        wrapperName="metronome"
        inputName="met-input"
        spanName="BPM"
        count={90}
      ></NumberInput>
      <NumberInput
        logo={<RepeatIcon></RepeatIcon>}
        wrapperName="repeat"
        inputName="rep-input"
        spanName="Repeats"
        count={4}
      ></NumberInput>
    </NavBar>
  );
}

export default TopNavBar;
