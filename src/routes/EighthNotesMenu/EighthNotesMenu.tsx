import { eightNotesPermutations } from '../../lib/utils/permutations';
import StickingsMenu from '../../components/Menu/StickingsMenu/StickingsMenu';
import getEighthNotesArray from '../../lib/utils/staffUtils/getEighthNotesArray';
import Staff from '../../components/Staff/Staff';
import { useSelectStickings } from '../../hooks/useSelectStickings';
import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import { useOutletContext } from 'react-router';
import { Samples } from '../../hooks/useSamples';
import { useMetronome } from '../../hooks/useMetronome';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import '../../components/Menu/MenuContainer.css';

function EighthNotesMenu() {
  const samples = useOutletContext<Samples>();
  const eighthsProps = useSelectStickings();
  const { selectedStickings, onFormChange } = eighthsProps;
  const metronomeProps = useMetronome(selectedStickings);

  return (
    <>
      <div className="main-container">
        {/* Layout */}
        <div className="controls">
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
        </div>
      </div>
      <Staff
        stickings={selectedStickings}
        getNotesArrayFunction={getEighthNotesArray}
        isPlaying={metronomeProps.isPlaying}
      />
      <div className="menu">
        <StickingsMenu
          permutations={eightNotesPermutations}
          onFormChange={onFormChange}
          selectedStickings={selectedStickings}
        />
      </div>
    </>
  );
}

export default EighthNotesMenu;
