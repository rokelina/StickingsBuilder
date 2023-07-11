import StickingsMenu from './StickingsMenu/StickingsMenu';
import TripletsStaff from '../Staff/TripletsStaff/TripletsStaff';
import { tripletPermutations } from '../../lib/utils/permutations';

interface Props {
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
  selectedStickings: { [key: string]: string };
}

function TripletNotesMenu({ onFormChange, onReset, selectedStickings }: Props) {
  return (
    <>
      <TripletsStaff selectedStickings={selectedStickings} />
      <StickingsMenu
        permutations={tripletPermutations}
        onFormChange={onFormChange}
        onReset={onReset}
        selectedStickings={selectedStickings}
      />
    </>
  );
}

export default TripletNotesMenu;
