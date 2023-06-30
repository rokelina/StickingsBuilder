import TopNavBar from '../TopNavBar/TopNavBar';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import StaffWrapper from '../Staff/StaffWrapper.tsx';
import MenuWrapper from '../Menu/MenuWrapper.tsx';
import './MainWrapper.css';
import { useState } from 'react';

interface Props {
  displayMenu: string;
}

function MainWrapper({ displayMenu }: Props) {
  const [selectedStickings, setSelectedStickings] = useState<
    Record<string, string>
  >({});

  const handleFormChange = (beatName: string, children: string) => {
    if (beatName === 'row') {
      setSelectedStickings({
        'beat-1': children,
        'beat-2': children,
        'beat-3': children,
        'beat-4': children,
      });
      return;
    }
    setSelectedStickings({
      ...selectedStickings,
      [beatName]: children,
    });
  };

  const handleResetClick = () => {
    setSelectedStickings({});
  };

  console.log(selectedStickings);

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
        onFormChange={handleFormChange}
        selectedStickings={selectedStickings}
        onReset={handleResetClick}
      />
    </main>
  );
}

export default MainWrapper;
