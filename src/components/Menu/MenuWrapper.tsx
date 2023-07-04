import StickingsMenu from './StickingsMenu/StickingsMenu.tsx';
import RandomMenu from './RandomMenu/RandomMenu.tsx';
import EighthNoteStaff from '../Staff/EighthNoteStaff/EighthNoteStaff.tsx';
import TripletsStaff from '../Staff/TripletsStaff/TripletsStaff.tsx';
import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff.tsx';
import { eightNotesPermutations, tripletPermutations } from './permutations.ts';
import './Menu.css';
import '../Staff/Staff.css';

interface Props {
  displayMenu: string;
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
  selectedStickings: { [key: string]: string };
}

function MenuWrapper({
  displayMenu,
  onFormChange,
  onReset,
  selectedStickings,
}: Props) {
  return (
    <div className="menu">
      {displayMenu === 'eighth-notes' && (
        <>
          <EighthNoteStaff selectedStickings={selectedStickings} />
          <StickingsMenu
            permutations={eightNotesPermutations}
            onFormChange={onFormChange}
            onReset={onReset}
            selectedStickings={selectedStickings}
          />
        </>
      )}
      {displayMenu === 'triplet-notes' && (
        <>
          <TripletsStaff selectedStickings={selectedStickings} />
          <StickingsMenu
            permutations={tripletPermutations}
            onFormChange={onFormChange}
            onReset={onReset}
            selectedStickings={selectedStickings}
          />
        </>
      )}
      {displayMenu === 'random-stickings' && (
        <>
          <EmptyStaff />
          <RandomMenu />
        </>
      )}
    </div>
  );
}
export default MenuWrapper;
