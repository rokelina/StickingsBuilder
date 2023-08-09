import { tripletPermutations } from '../../lib/utils/permutations';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import TripletsStaff from '../Staff/TripletsStaff/TripletsStaff';
import './Menu.css';

interface Props {
  selectedStickings: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
}
function TripletNotesMenu({ selectedStickings, onFormChange }: Props) {
  return (
    <>
      <div className="menu">
        <TripletsStaff selectedStickings={selectedStickings} />
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
