import { useState } from 'react';
import MetronomeWrapper from '../MetronomeControls/MetronomeWrapper';
import EighthNotesMenu from './EighthNotesMenu';
import TripletNotesMenu from './TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import generateRandomStickings from '../../lib/utils/randomModeUtils/generateRandomStickings';

interface Props {
  displayMenu: string;
}

function MenuWrapper({ displayMenu }: Props) {
  //Eights-Triplets State
  const [selectedStickings, setSelectedStickings] = useState<{
    [key: string]: string;
  }>({});
  console.log(selectedStickings);
  //Random Mode State
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});
  const [selectedRandomOption, setSelectedRandomOption] = useState<string[]>(
    []
  );
  const [isSelectAll, setSelectAll] = useState(false);

  console.log(generatedStickings);
  //Stickings Form Handler
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

  // Random Mode Handlers
  const handleRandomOptionsChange = (id: string, checked: boolean): void => {
    if (id === 'select-all') {
      if (checked) {
        setSelectedRandomOption(['select-all']);
        setSelectAll(true);
      } else {
        setSelectedRandomOption([]);
        setSelectAll(false);
      }
    } else {
      if (checked) {
        setSelectedRandomOption([...selectedRandomOption, id]);
      } else {
        setSelectedRandomOption(
          selectedRandomOption.filter((selectedOption) => selectedOption !== id)
        );
      }
    }
  };

  const handleGenerateRandomStickings = (selectedOption: string[]): void => {
    if (!selectedOption.length) {
      alert('Select one subdivision option');
      return;
    }
    const generated = generateRandomStickings(selectedOption);
    setGeneratedStickings(generated);
  };

  return (
    <>
      <MetronomeWrapper
        selectedStickings={
          displayMenu === 'random-stickings'
            ? generatedStickings
            : selectedStickings
        }
      />
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu
          selectedStickings={selectedStickings}
          onFormChange={handleFormChange}
        />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu
          selectedStickings={selectedStickings}
          onFormChange={handleFormChange}
        />
      )}
      {displayMenu === 'random-stickings' && (
        <RandomMenu
          selectedRandomOption={selectedRandomOption}
          isSelectAll={isSelectAll}
          generatedStickings={generatedStickings}
          onGenerateStickings={handleGenerateRandomStickings}
          onRandomOptionsChange={handleRandomOptionsChange}
        />
      )}
    </>
  );
}
export default MenuWrapper;
