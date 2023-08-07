import { useState } from 'react';
import { tripletPermutations } from '../../lib/utils/permutations';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import StickingsMenu from './StickingsMenu/StickingsMenu';
import TripletsStaff from '../Staff/TripletsStaff/TripletsStaff';
import './Menu.css';

function TripletNotesMenu() {
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
        <TripletsStaff selectedStickings={selectedStickings} />
        <StickingsMenu
          permutations={tripletPermutations}
          onFormChange={handleFormChange}
          selectedStickings={selectedStickings}
        />
      </div>
    </>
  );
}

export default TripletNotesMenu;
