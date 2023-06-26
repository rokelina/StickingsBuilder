import EighthNoteStaff from './EighthNoteStaff/EighthNoteStaff';
import EmptyStaff from './EmptyStaff/EmptyStaff';
import TripletsStaff from './TripletsStaff/TripletsStaff';
import './Staff.css';

interface Props {
  displayMenu: string;
}

function StaffWrapper({ displayMenu }: Props) {
  return (
    <div className="staff-container">
      {displayMenu === 'eighth-notes' && <EighthNoteStaff />}
      {displayMenu === 'triplet-notes' && <TripletsStaff />}
      {displayMenu === 'random-stickings' && <EmptyStaff />}
    </div>
  );
}
export default StaffWrapper;
