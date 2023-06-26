import StickingsMenu from './StickingsMenu/StickingsMenu.tsx';
import { eightNotesPermutations, tripletPermutations } from './permutations.ts';
import './Menu.css';

interface Props {
  displayMenu: string;
}

function MenuWrapper({ displayMenu }: Props) {
  return (
    <div className="menu">
      {displayMenu === 'eighth-notes' && (
        <StickingsMenu permutations={eightNotesPermutations} />
      )}
      {displayMenu === 'triplet-notes' && (
        <StickingsMenu permutations={tripletPermutations} />
      )}
      {displayMenu === 'random-stickings' && <h1>Random</h1>}
    </div>
  );
}
export default MenuWrapper;
