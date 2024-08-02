import { tripletPermutations } from '../../lib/utils/permutations';
import StickingsMenu from '../../components/Menu/StickingsMenu/StickingsMenu';
import getTripletNotesArray from '../../lib/utils/staffUtils/getTripletNotesArray';
import Staff from '../../components/Staff/Staff';
import { useSelectStickings } from '../../hooks/useSelectStickings';
import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import { useOutletContext } from 'react-router';
import { Samples } from '../../hooks/useSamples';
import { useMetronome } from '../../hooks/useMetronome';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import '../../components/Menu/MenuContainer.css';

function TripletNotesMenu() {
  const samples = useOutletContext<Samples>();
  const tripletProps = useSelectStickings();
  const { selectedStickings, onFormChange } = tripletProps;
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
