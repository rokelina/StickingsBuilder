import EighthNoteStaff from './EighthNoteStaff';
import EmptyStaff from './EmptyStaff';
import TripletsStaff from './TripletsStaff';
import './Staff.css';

interface Props {
  displayMenu: string;
}

function StaffWrapper({ displayMenu }: Props) {
  return (
    <div className="notes-container">
      {displayMenu === 'eighth-notes' && <EighthNoteStaff />}
      {displayMenu === 'triplet-notes' && <TripletsStaff />}
      {displayMenu === 'random-stickings' && <EmptyStaff />}
    </div>
  );
}
export default StaffWrapper;
