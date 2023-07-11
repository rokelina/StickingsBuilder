import TopNavBar from '../TopNavBar/TopNavBar';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import MenuWrapper from '../Menu/MenuWrapper.tsx';
import './MainWrapper.css';
import { useState } from 'react';

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
  const [bpm, setBpm] = useState('90');
  const [repeats, setRepeats] = useState('4');

  const handleBpmChange = (numberInput: string): void => {
    setBpm(numberInput);
  };

  const handleRepeatChange = (numberInput: string): void => {
    setRepeats(numberInput);
  };

  return (
    <main>
      <TopNavBar
        bpmValue={bpm}
        repeatValue={repeats}
        onBpmChange={handleBpmChange}
        onRepeatChange={handleRepeatChange}
      />
      <PlaybackControls
        bpmValue={bpm}
        repeatValue={repeats}
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
