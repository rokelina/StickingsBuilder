import EighthNoteStaff from './EighthNoteStaff/EighthNoteStaff';
import EmptyStaff from './EmptyStaff/EmptyStaff';
import TripletsStaff from './TripletsStaff/TripletsStaff';
import './Staff.css';

interface Props {
  displayMenu: string;
  selectedStickings: { [key: string]: string };
}

function StaffWrapper({ displayMenu, selectedStickings }: Props) {
  return (
    <div className="staff-container">
      {displayMenu === 'eighth-notes' && (
        <EighthNoteStaff selectedStickings={selectedStickings} />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletsStaff selectedStickings={selectedStickings} />
      )}
      {displayMenu === 'random-stickings' && <EmptyStaff />}
    </div>
  );
}
export default StaffWrapper;
