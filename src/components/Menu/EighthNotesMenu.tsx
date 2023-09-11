import { eightNotesPermutations } from '../../lib/utils/permutations';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import drawEighthNotes from '../../lib/utils/staffUtils/drawEighthNotes';
import Staff from '../Staff/Staff';
import './Menu.css';

interface Props {
  stickingMenuProps: {
    selectedStickings: { [key: string]: string };
    onFormChange: (beatName: string, children: string) => void;
  };
  isPlaying: boolean;
}

function EighthNotesMenu({ stickingMenuProps, isPlaying }: Props) {
  const { selectedStickings, onFormChange } = stickingMenuProps;

  return (
    <>
      <div className="menu">
        <Staff
          stickings={selectedStickings}
          drawNotesFunction={drawEighthNotes}
          isPlaying={isPlaying}
        />
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
