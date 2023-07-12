import StickingsMenu from './StickingsMenu/StickingsMenu';
import EighthNoteStaff from '../Staff/EighthNoteStaff/EighthNoteStaff';
import { eightNotesPermutations } from '../../lib/utils/permutations';

interface Props {
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
  selectedStickings: { [key: string]: string };
}

function EighthNotesMenu({ onFormChange, onReset, selectedStickings }: Props) {
  return (
    <>
      <EighthNoteStaff selectedStickings={selectedStickings} />
      <StickingsMenu
        permutations={eightNotesPermutations}
        onFormChange={onFormChange}
        onReset={onReset}
        selectedStickings={selectedStickings}
      />
    </>
  );
}

export default EighthNotesMenu;
