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
  const [selectedSticking, setSelectedSticking] = useState<
    Record<string, string>
  >({});

  const handleFormChange = (beatName: string, children: string) => {
    setSelectedSticking({
      ...selectedSticking,
      [beatName]: children,
    });
  };

  console.log(selectedSticking);

  return (
    <main>
      <TopNavBar />
      <PlaybackControls />
      <StaffWrapper displayMenu={displayMenu} />
      <MenuWrapper displayMenu={displayMenu} onFormChange={handleFormChange} />
    </main>
  );
}

export default MainWrapper;
