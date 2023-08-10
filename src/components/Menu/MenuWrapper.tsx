import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useGenerateStickings } from '../../hooks/useGenerateStickings';
import MetronomeWrapper from '../MetronomeControls/MetronomeWrapper';
import EighthNotesMenu from './EighthNotesMenu';
import TripletNotesMenu from './TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';

interface Props {
  displayMenu: string;
}

function MenuWrapper({ displayMenu }: Props) {
  const eighths = useSelectStickings();
  const triplets = useSelectStickings();
  const random = useGenerateStickings();

  // Pass stickings to the metronome
  const returnStickings = () => {
    if (displayMenu === 'random-stickings') {
      return random.generatedStickings;
    }
    if (displayMenu === 'eighth-notes') {
      return eighths.selectedStickings;
    }
    if (displayMenu === 'triplet-notes') {
      return triplets.selectedStickings;
    }
    return {};
  };

  return (
    <>
      <MetronomeWrapper selectedStickings={returnStickings()} />
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu stickingMenuProps={eighths} />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu stickingMenuProps={triplets} />
      )}
      {displayMenu === 'random-stickings' && (
        <RandomMenu randomMenuProps={random} />
      )}
    </>
  );
}
export default MenuWrapper;
