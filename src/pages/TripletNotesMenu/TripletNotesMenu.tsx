import Staff from '../../components/Staff/Staff';
import StickingsMenu from '../../components/StickingsMenu/StickingsMenu';

import { tripletPermutations } from '../../lib/utils/permutations';
import getTripletNotesArray from '../../lib/utils/staffUtils/getTripletNotesArray';

import { MenuOutletContextProps } from '../MenuLayout/MenuLayout';
import { useOutletContext } from 'react-router';

function TripletNotesMenu() {
  const { tripletProps, metronomeProps } =
    useOutletContext<MenuOutletContextProps>();
  const { selectedStickings, onFormChange } = tripletProps;
  const { isPlaying } = metronomeProps;

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
