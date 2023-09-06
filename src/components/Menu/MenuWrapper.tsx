import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useGenerateStickings } from '../../hooks/useGenerateStickings';
import { Samples } from '../../hooks/useCreateSamples';
import EighthNotesMenu from './EighthNotesMenu';
import TripletNotesMenu from './TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import MetronomeControls from '../MetronomeControls/MetronomeControls';

interface Props {
  displayMenu: string;
  samples: Samples;
}

function MenuWrapper({ displayMenu, samples }: Props) {
  const eighthsProps = useSelectStickings();
  const tripletsProps = useSelectStickings();
  const randomProps = useGenerateStickings();

  // Pass stickings to the metronome
  const returnStickings = () => {
    if (displayMenu === 'random-stickings') {
      return randomProps.generatedStickings;
    }
    if (displayMenu === 'eighth-notes') {
      return eighthsProps.selectedStickings;
    }
    if (displayMenu === 'triplet-notes') {
      return tripletsProps.selectedStickings;
    }
    return {};
  };

  return (
    <>
      <MetronomeControls
        selectedStickings={returnStickings()}
        displayMenu={displayMenu}
        samples={samples}
      />
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu stickingMenuProps={eighthsProps} />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu stickingMenuProps={tripletsProps} />
      )}
      {displayMenu === 'random-stickings' && (
        <RandomMenu randomMenuProps={randomProps} />
      )}
    </>
  );
}
export default MenuWrapper;
