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
  //Eights State
  const [selectedEighths, setSelectedEighths] = useState<{
    [key: string]: string;
  }>({});

  //Triplets State
  const [selectedTriplets, setSelectedTriplets] = useState<{
    [key: string]: string;
  }>({});

  //Random Mode State
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});
  const [selectedRandomOption, setSelectedRandomOption] = useState<string[]>(
    []
  );
  const [isSelectAll, setSelectAll] = useState(false);

  //Stickings Form Handler
  const handleEighthsChange = (beatName: string, children: string) => {
    if (beatName === 'row') {
      setSelectedEighths({
        'beat-1': children,
        'beat-2': children,
        'beat-3': children,
        'beat-4': children,
      });
      return;
    }
    setSelectedEighths({
      ...selectedEighths,
      [beatName]: children,
    });
  };

  const handleTripletsChange = (beatName: string, children: string) => {
    if (beatName === 'row') {
      setSelectedTriplets({
        'beat-1': children,
        'beat-2': children,
        'beat-3': children,
        'beat-4': children,
      });
      return;
    }
    setSelectedTriplets({
      ...selectedTriplets,
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

  // Pass stickings to the metronome
  const returnStickings = () => {
    if (displayMenu === 'random-stickings') {
      return generatedStickings;
    }
    if (displayMenu === 'eighth-notes') {
      return selectedEighths;
    }
    if (displayMenu === 'triplet-notes') {
      return selectedTriplets;
    }
    return {};
  };

  return (
    <>
      <MetronomeWrapper selectedStickings={returnStickings()} />
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu
          selectedStickings={selectedEighths}
          onFormChange={handleEighthsChange}
        />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu
          selectedStickings={selectedTriplets}
          onFormChange={handleTripletsChange}
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
