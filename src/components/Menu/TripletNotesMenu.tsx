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
  addCountdown: boolean;
}
function TripletNotesMenu({
  stickingMenuProps,
  isPlaying,
  addCountdown,
}: Props) {
  const { selectedStickings, onFormChange } = stickingMenuProps;

  return (
    <>
      <div className="menu">
        <Staff
          stickings={selectedStickings}
          drawNotesFunction={drawTripletNotes}
          isPlaying={isPlaying}
          addCountdown={addCountdown}
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
