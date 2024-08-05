import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import Staff from '../../components/Staff/Staff';
import StickingsMenu from '../../components/Menu/StickingsMenu/StickingsMenu';
import { eightNotesPermutations } from '../../lib/utils/permutations';
import getEighthNotesArray from '../../lib/utils/staffUtils/getEighthNotesArray';
import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useMetronome } from '../../hooks/useMetronome';
import { useOutletContext } from 'react-router';
import { MenuOutletProps } from '../MenuLayout/MenuLayout';
// import { Samples } from '../../hooks/useSamples';
function EighthNotesMenu() {
  const { eighthsProps, metronomeProps } = useOutletContext<MenuOutletProps>();
  // const eighthsProps = useSelectStickings();
  // const { selectedStickings, onFormChange } = eighthsProps;
  // const metronomeProps = useMetronome(selectedStickings);

  return (
    <>
      {/* Layout */}
      {/* <div className="controls">
        <MetronomeControls
          selectedStickings={selectedStickings}
          samples={samples}
          isPlaying={metronomeProps.isPlaying}
          bpm={metronomeProps.bpm}
          addCountdown={metronomeProps.addCountdown}
          onStartClick={metronomeProps.handleStartClick}
          onBpmChange={metronomeProps.handleBpmChange}
          onVolumeChange={metronomeProps.handleVolumeChange}
          onCountdown={metronomeProps.handleCountdown}
        />
        <SaveBtn currentSticking={selectedStickings} />
      </div> */}
      <Staff
        stickings={eighthsProps.selectedStickings}
        getNotesArrayFunction={getEighthNotesArray}
        isPlaying={metronomeProps.isPlaying}
      />
      <div className="menu">
        <StickingsMenu
          permutations={eightNotesPermutations}
          onFormChange={eighthsProps.onFormChange}
          selectedStickings={eighthsProps.selectedStickings}
        />
      </div>
    </>
  );
}

export default EighthNotesMenu;
