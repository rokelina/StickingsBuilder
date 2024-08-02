import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import Staff from '../../components/Staff/Staff';
import StickingsMenu from '../../components/Menu/StickingsMenu/StickingsMenu';
import { tripletPermutations } from '../../lib/utils/permutations';
import getTripletNotesArray from '../../lib/utils/staffUtils/getTripletNotesArray';
import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useMetronome } from '../../hooks/useMetronome';
import { Samples } from '../../hooks/useSamples';
import { useOutletContext } from 'react-router';

function TripletNotesMenu() {
  const samples = useOutletContext<Samples>();
  const tripletProps = useSelectStickings();
  const { selectedStickings, onFormChange } = tripletProps;
  const metronomeProps = useMetronome(selectedStickings);

  return (
    <>
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
      <Staff
        stickings={selectedStickings}
        getNotesArrayFunction={getTripletNotesArray}
        isPlaying={metronomeProps.isPlaying}
      />
      <div className="menu">
        <StickingsMenu
          permutations={tripletPermutations}
          onFormChange={onFormChange}
          selectedStickings={selectedStickings}
        />
      </div>
    </>
  );
}

export default TripletNotesMenu;
