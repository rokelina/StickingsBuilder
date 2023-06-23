import PlaybackControls from '../PlaybackControls/PlaybackControls';
import TopNavBar from '../TopNavBar/TopNavBar';
import EighthNoteStaff from '../Staff/EighthNoteStaff';
import EmptyStaff from '../Staff/EmptyStaff';
import TripletsStaff from '../Staff/TripletsStaff';
import NotesWrapper from '../NotesWrapper/NotesWrapper';
import StickingsMenu from '../Menu/StickingsMenu';
import {
  eightNotesPermutations,
  tripletPermutations,
} from '../Menu/permutations.ts';
import '../Staff/Staff.css';
import './MainWrapper.css';

/* MainWrapper components:
- TopNavBar ✔️
- PlaybackControls ✔️
-Notes Wrapper ✔️
  - Staff
-Notes Wrapper
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
        eighthNotes={<EighthNoteStaff></EighthNoteStaff>}
        tripletNotes={<TripletsStaff></TripletsStaff>}
        randomNotes={<EmptyStaff></EmptyStaff>}
      ></NotesWrapper>
      <NotesWrapper
        displayMenu={displayMenu}
        divClassName="menu"
        eighthNotes={
          <StickingsMenu permutations={eightNotesPermutations}></StickingsMenu>
        }
        tripletNotes={
          <StickingsMenu permutations={tripletPermutations}></StickingsMenu>
        }
        randomNotes={<h1>Random</h1>}
      ></NotesWrapper>
    </main>
  );
}

export default MainWrapper;
