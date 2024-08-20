import Staff from '../../components/Staff/Staff';
import StickingsMenu from '../../components/StickingsMenu/StickingsMenu';

import { eightNotesPermutations } from '../../lib/utils/permutations';
import getEighthNotesArray from '../../lib/utils/staffUtils/getEighthNotesArray';

import { MenuOutletContextProps } from '../MenuLayout/MenuLayout';
import { useOutletContext } from 'react-router';

function EighthNotesMenu() {
  const { eighthsProps, metronomeProps } =
    useOutletContext<MenuOutletContextProps>();
  const { selectedStickings, onFormChange } = eighthsProps;
  const { isPlaying } = metronomeProps;

  return (
    <>
      <Staff
        stickings={selectedStickings}
        getNotesArrayFunction={getEighthNotesArray}
        isPlaying={isPlaying}
      />
      <div className="menu">
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
