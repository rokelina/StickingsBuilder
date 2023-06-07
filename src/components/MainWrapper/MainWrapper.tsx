import PlaybackControls from '../PlaybackControls/PlaybackControls';
import EighthNoteStaff from '../Staff.tsx/EighthNoteStaff';
import EmptyStaff from '../Staff.tsx/EmptyStaff';
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
      {displayMenu === 'triplet-notes' && <h1>Triplets notes</h1>}
      {displayMenu === 'random-stickings' && <EmptyStaff />}
    </main>
  );
}

export default MainWrapper;
