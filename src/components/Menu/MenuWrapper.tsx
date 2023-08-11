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
      <MetronomeWrapper
        selectedStickings={returnStickings()}
        displayMenu={displayMenu}
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
