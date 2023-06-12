import PlaybackControls from '../PlaybackControls/PlaybackControls';
import StaffWrapper from '../Staff/StaffWrapper';
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
      <StaffWrapper displayMenu={displayMenu} />
    </main>
  );
}

export default MainWrapper;
