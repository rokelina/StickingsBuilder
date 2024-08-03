import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
// import Staff from '../../components/Staff/Staff';
// import StickingsMenu from '../../components/Menu/StickingsMenu/StickingsMenu';
// import { eightNotesPermutations } from '../../lib/utils/permutations';
// import getEighthNotesArray from '../../lib/utils/staffUtils/getEighthNotesArray';
import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useMetronome } from '../../hooks/useMetronome';
import { Samples } from '../../hooks/useSamples';
import { Outlet, useLocation, useOutletContext } from 'react-router';
import { useGenerateStickings } from '../../hooks/useGenerateStickings';

function MenuLayout() {
  const samples = useOutletContext<Samples>();
  const eighthsProps = useSelectStickings();
  const tripletProps = useSelectStickings();
  const randomProps = useGenerateStickings();
  // const { selectedStickings, onFormChange } = eighthsProps;

  // Initialize currentStickings to an empty object
  let currentStickings: {
    [key: string]: string;
  } = {};

  const location = useLocation();
  if (location.pathname.endsWith('eighth-notes')) {
    currentStickings = eighthsProps.selectedStickings;
  }
  if (location.pathname.endsWith('triplet-notes')) {
    currentStickings = tripletProps.selectedStickings;
  }
  if (location.pathname.endsWith('random-stickings')) {
    currentStickings = randomProps.generatedStickings;
  }

  const metronomeProps = useMetronome(currentStickings);

  return (
    <>
      {/* Layout */}
      <div className="controls">
        <MetronomeControls
          selectedStickings={currentStickings}
          samples={samples}
          isPlaying={metronomeProps.isPlaying}
          bpm={metronomeProps.bpm}
          addCountdown={metronomeProps.addCountdown}
          onStartClick={metronomeProps.handleStartClick}
          onBpmChange={metronomeProps.handleBpmChange}
          onVolumeChange={metronomeProps.handleVolumeChange}
          onCountdown={metronomeProps.handleCountdown}
        />
        <SaveBtn currentSticking={currentStickings} />
      </div>
      <Outlet
        context={{ eighthsProps, tripletProps, randomProps, metronomeProps }}
      />
      {/* <Staff
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
      </div> */}
    </>
  );
}

export default MenuLayout;
