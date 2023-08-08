import { useState } from 'react';
import { eightNotesPermutations } from '../../lib/utils/permutations';
import { Sampler } from 'tone';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import EighthNoteStaff from '../Staff/EighthNoteStaff/EighthNoteStaff';
import './Menu.css';

interface Samples {
  clickSampler: Sampler | null;
  snareSampler: Sampler | null;
}
interface Props {
  samples: Samples;
}
function EighthNotesMenu({ samples }: Props) {
  const [selectedStickings, setSelectedStickings] = useState<{
    [key: string]: string;
  }>({});

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

  return (
    <>
      <MetronomeControls
        selectedStickings={selectedStickings}
        samples={samples}
      />
      <div className="menu">
        <EighthNoteStaff selectedStickings={selectedStickings} />
        <StickingsMenu
          permutations={eightNotesPermutations}
          onFormChange={handleFormChange}
          selectedStickings={selectedStickings}
        />
      </div>
    </>
  );
}

export default EighthNotesMenu;
