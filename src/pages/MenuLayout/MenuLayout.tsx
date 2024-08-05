import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import { StickingsProps } from '../../hooks/useSelectStickings';
import { RandomProps } from '../../hooks/useGenerateStickings';
import { MetronomeProps, useMetronome } from '../../hooks/useMetronome';
import { Outlet, useLocation, useOutletContext } from 'react-router';
import { OutletContextProps } from '../../App';

export type MenuOutletProps = {
  eighthsProps: StickingsProps;
  tripletProps: StickingsProps;
  randomProps: RandomProps;
  metronomeProps: MetronomeProps;
};

function MenuLayout() {
  const { samples, eighthsProps, tripletProps, randomProps } =
    useOutletContext<OutletContextProps>();

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
      {/* Layout */}
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
