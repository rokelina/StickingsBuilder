import { useState } from 'react';
import { eightNotesPermutations } from '../../lib/utils/permutations';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import EighthNoteStaff from '../Staff/EighthNoteStaff/EighthNoteStaff';
import './Menu.css';

function EighthNotesMenu() {
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
      <MetronomeControls selectedStickings={selectedStickings} />
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
