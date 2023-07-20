import StickingsMenu from './StickingsMenu/StickingsMenu';
import TripletsStaff from '../Staff/TripletsStaff/TripletsStaff';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import { tripletPermutations } from '../../lib/utils/permutations';
import { useState } from 'react';
import './Menu.css';

// interface Props {
//   onFormChange: (beatName: string, children: string) => void;
//   onReset: () => void;
//   selectedStickings: { [key: string]: string };
// }

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

  const handleResetClick = () => {
    setSelectedStickings({});
  };

  console.log(selectedStickings);
  return (
    <>
      <MetronomeControls selectedStickings={selectedStickings} />
      <div className="menu">
        <TripletsStaff selectedStickings={selectedStickings} />
        <StickingsMenu
          permutations={tripletPermutations}
          onFormChange={handleFormChange}
          onReset={handleResetClick}
          selectedStickings={selectedStickings}
        />
      </div>
    </>
  );
}

export default TripletNotesMenu;
