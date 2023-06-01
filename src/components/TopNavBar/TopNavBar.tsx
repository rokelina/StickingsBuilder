import NavBar from '../NavBar/NavBar';
import NumberInput from './NumberInput';
import './TopNavBar.css';
import { ReactComponent as MetronomeIcon } from 'src/assets/icons/metronome.svg';

/* TopNavBar components
- MetronomeBpm
- Repeats
 */

function TopNavBar() {
  return (
    <NavBar classname="metronome-options">
      <MetronomeIcon />
      <NumberInput
        wrapperName="metronome"
        inputName="met-input"
        spanName="BPM"
        count={90}
      ></NumberInput>
      <NumberInput
        // children="Repeats"
        wrapperName="repeat"
        inputName="rep-input"
        spanName="Repeats"
        count={4}
      ></NumberInput>
    </NavBar>
  );
}

export default TopNavBar;
