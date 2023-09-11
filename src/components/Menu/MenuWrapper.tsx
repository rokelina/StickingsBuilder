import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useGenerateStickings } from '../../hooks/useGenerateStickings';
import { Samples } from '../../hooks/useSamples';
import EighthNotesMenu from './EighthNotesMenu';
import TripletNotesMenu from './TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import { useMetronomeProps } from '../../hooks/useMetronomeProps';

interface Props {
  displayMenu: string;
  samples: Samples;
}

function MenuWrapper({ displayMenu, samples }: Props) {
  const eighthsProps = useSelectStickings();
  const tripletsProps = useSelectStickings();
  const randomProps = useGenerateStickings();

  //Initialize currentStickings to an empty object
  let currentStickings: {
    [key: string]: string;
  } = {};
  // Pass stickings to the metronome
  if (displayMenu === 'random-stickings') {
    currentStickings = randomProps.generatedStickings;
  }
  if (displayMenu === 'eighth-notes') {
    currentStickings = eighthsProps.selectedStickings;
  }
  if (displayMenu === 'triplet-notes') {
    currentStickings = tripletsProps.selectedStickings;
  }

  const metronomeProps = useMetronomeProps(displayMenu, currentStickings);

  return (
    <>
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
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu
          stickingMenuProps={eighthsProps}
          isPlaying={metronomeProps.isPlaying}
        />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu
          stickingMenuProps={tripletsProps}
          isPlaying={metronomeProps.isPlaying}
        />
      )}
      {displayMenu === 'random-stickings' && (
        <RandomMenu
          randomMenuProps={randomProps}
          isPlaying={metronomeProps.isPlaying}
        />
      )}
    </>
  );
}
export default MenuWrapper;
