import { tripletPermutations } from '../../lib/utils/permutations';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import Staff from '../Staff/Staff';
import './Menu.css';
import drawTripletNotes from '../../lib/utils/staffUtils/drawTriplets';

interface Props {
  stickingMenuProps: {
    selectedStickings: { [key: string]: string };
    onFormChange: (beatName: string, children: string) => void;
  };
  isPlaying: boolean;
}
function TripletNotesMenu({ stickingMenuProps, isPlaying }: Props) {
  const { selectedStickings, onFormChange } = stickingMenuProps;

  return (
    <>
      <div className="menu">
        <Staff
          stickings={selectedStickings}
          drawNotesFunction={drawTripletNotes}
          isPlaying={isPlaying}
        />
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
