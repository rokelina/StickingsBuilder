import StickingsMenu from './StickingsMenu/StickingsMenu';
import TripletsStaff from '../Staff/TripletsStaff/TripletsStaff';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import { tripletPermutations } from '../../lib/utils/permutations';
import { useState } from 'react';
import './Menu.css';

interface Props {
  displayMenu: string;
}

function TripletNotesMenu({ displayMenu }: Props) {
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

  console.log(selectedStickings);
  return (
    <>
      <MetronomeControls
        selectedStickings={selectedStickings}
        displayMenu={displayMenu}
      />
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
