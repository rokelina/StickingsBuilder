import PlaybackControls from '../PlaybackControls/PlaybackControls';
import EighthNoteStaff from '../Staff.tsx/EighthNoteStaff';
import EmptyStaff from '../Staff.tsx/EmptyStaff';
import TripletsStaff from '../Staff.tsx/TripletsStaff';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainWrapper.css';

/* MainWrapper components:
- TopNavBar ✔️
- PlaybackControls ✔️
- VexflowNotes
_ Stickings Menu
 */

interface Props {
  displayMenu: string;
}
function MainWrapper({ displayMenu }: Props) {
  return (
    <main>
      <TopNavBar />
      <PlaybackControls />
      {displayMenu === 'eighth-notes' && <EighthNoteStaff />}
      {displayMenu === 'triplet-notes' && <TripletsStaff />}
      {displayMenu === 'random-stickings' && <EmptyStaff />}
    </main>
  );
}

export default MainWrapper;
