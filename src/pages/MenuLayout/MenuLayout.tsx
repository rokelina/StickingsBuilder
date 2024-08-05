import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import {
  StickingsProps,
  useSelectStickings,
} from '../../hooks/useSelectStickings';
import {
  RandomProps,
  useGenerateStickings,
} from '../../hooks/useGenerateStickings';
import { MetronomeProps, useMetronome } from '../../hooks/useMetronome';
import { Samples } from '../../hooks/useSamples';
import { Outlet, useLocation, useOutletContext } from 'react-router';

export type MenuOutletProps = {
  eighthsProps: StickingsProps;
  tripletProps: StickingsProps;
  randomProps: RandomProps;
  metronomeProps: MetronomeProps;
};

function MenuLayout() {
  const samples = useOutletContext<Samples>();
  const eighthsProps = useSelectStickings();
  const tripletProps = useSelectStickings();
  const randomProps = useGenerateStickings();

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
        context={{
          eighthsProps,
          tripletProps,
          randomProps,
          metronomeProps,
        }}
      />
    </>
  );
}

export default MenuLayout;
