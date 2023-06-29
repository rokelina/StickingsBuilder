import StickingsMenu from './StickingsMenu/StickingsMenu.tsx';
import RandomMenu from './RandomMenu/RandomMenu.tsx';
import { eightNotesPermutations, tripletPermutations } from './permutations.ts';
import './Menu.css';

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
        <StickingsMenu
          permutations={eightNotesPermutations}
          onFormChange={onFormChange}
          onReset={onReset}
          selectedStickings={selectedStickings}
        />
      )}
      {displayMenu === 'triplet-notes' && (
        <StickingsMenu
          permutations={tripletPermutations}
          onFormChange={onFormChange}
          onReset={onReset}
          selectedStickings={selectedStickings}
        />
      )}
      {displayMenu === 'random-stickings' && <RandomMenu />}
    </div>
  );
}
export default MenuWrapper;
