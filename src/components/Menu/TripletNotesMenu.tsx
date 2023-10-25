import { tripletPermutations } from '../../lib/utils/permutations';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import Staff from '../Staff/Staff';
import getTripletNotesArray from '../../lib/utils/staffUtils/getTripletNotesArray';
import './Menu.css';

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
      <Staff
        stickings={selectedStickings}
        getNotesArrayFunction={getTripletNotesArray}
        isPlaying={isPlaying}
      />
      <div className="menu">
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
