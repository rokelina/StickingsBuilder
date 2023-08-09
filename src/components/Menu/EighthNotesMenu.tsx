import { eightNotesPermutations } from '../../lib/utils/permutations';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import EighthNoteStaff from '../Staff/EighthNoteStaff/EighthNoteStaff';
import './Menu.css';

interface Props {
  selectedStickings: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
}

function EighthNotesMenu({ selectedStickings, onFormChange }: Props) {
  return (
    <>
      <div className="menu">
        <EighthNoteStaff selectedStickings={selectedStickings} />
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
