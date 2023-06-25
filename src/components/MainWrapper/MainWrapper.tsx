import TopNavBar from '../TopNavBar/TopNavBar';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import StaffWrapper from '../Staff/StaffWrapper.tsx';
import MenuWrapper from '../Menu/MenuWrapper.tsx';
import './MainWrapper.css';

/* MainWrapper components:
- TopNavBar ✔️
- PlaybackControls ✔️
-Staff Wrapper ✔️
  - Staff
-Menu Wrapper ✔️
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
    </main>
  );
}

export default MainWrapper;
