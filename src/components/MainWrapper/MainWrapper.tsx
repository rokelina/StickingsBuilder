import PlaybackControls from '../PlaybackControls/PlaybackControls';
import TopNavBar from '../TopNavBar/TopNavBar';
import EighthNoteStaff from '../Staff/EighthNoteStaff';
import EmptyStaff from '../Staff/EmptyStaff';
import TripletsStaff from '../Staff/TripletsStaff';
import NotesWrapper from '../NotesWrapper/NotesWrapper';
import '../Staff/Staff.css';
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
      <NotesWrapper
        displayMenu={displayMenu}
        divClassName="staff-container"
        onEighthNotes={<EighthNoteStaff></EighthNoteStaff>}
        onTripletNotes={<TripletsStaff></TripletsStaff>}
        onRandomNotes={<EmptyStaff></EmptyStaff>}
      ></NotesWrapper>
      <NotesWrapper
        displayMenu={displayMenu}
        divClassName="menu-container"
        onEighthNotes={<h1>Eighths</h1>}
        onTripletNotes={<h1>Triplets</h1>}
        onRandomNotes={<h1>Random</h1>}
      ></NotesWrapper>

      {/* <StaffWrapper displayMenu={displayMenu} />
      <MenuWrapper displayMenu={displayMenu} /> */}
    </main>
  );
}

export default MainWrapper;
