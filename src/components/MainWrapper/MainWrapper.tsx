import TopNavBar from '../TopNavBar/TopNavBar';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import StaffWrapper from '../Staff/StaffWrapper.tsx';
import MenuWrapper from '../Menu/MenuWrapper.tsx';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
  selectedStickings: { [key: string]: string };
}

function MainWrapper({
  displayMenu,
  onFormChange,
  onReset,
  selectedStickings,
}: Props) {
  return (
    <main>
      <TopNavBar />
      <PlaybackControls />
      <StaffWrapper
        displayMenu={displayMenu}
        selectedStickings={selectedStickings}
      />
      <MenuWrapper
        displayMenu={displayMenu}
        onFormChange={onFormChange}
        selectedStickings={selectedStickings}
        onReset={onReset}
      />
    </main>
  );
}

export default MainWrapper;
