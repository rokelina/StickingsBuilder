import MetronomeOptions from '../MetronomeOptions/MetronomeOptions';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import { useState } from 'react';

interface Props {
  selectedStickings: { [key: string]: string };
}

function MetronomeWrapper({ selectedStickings }: Props) {
  const [bpm, setBpm] = useState('90');
  const [repeats, setRepeats] = useState('4');

  const handleBpmChange = (numberInput: string): void => {
    setBpm(numberInput);
  };

  const handleRepeatChange = (numberInput: string): void => {
    setRepeats(numberInput);
  };

  return (
    <div>
      <MetronomeOptions
        bpmValue={bpm}
        repeatValue={repeats}
        onBpmChange={handleBpmChange}
        onRepeatChange={handleRepeatChange}
      />
      <MetronomeControls
        bpmValue={bpm}
        repeatValue={repeats}
        selectedStickings={selectedStickings}
      />
    </div>
  );
}
export default MetronomeWrapper;
