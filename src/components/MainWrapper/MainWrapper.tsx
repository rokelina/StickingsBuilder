import TopNavBar from '../TopNavBar/TopNavBar';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import StaffWrapper from '../Staff/StaffWrapper.tsx';
import MenuWrapper from '../Menu/MenuWrapper.tsx';
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
      <StaffWrapper displayMenu={displayMenu} />
      <MenuWrapper displayMenu={displayMenu} />

      {/* <NotesWrapper
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
      ></NotesWrapper> */}
    </main>
  );
}

export default MainWrapper;
