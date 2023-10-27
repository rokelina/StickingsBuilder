import { useState } from 'react';
import generateRandomStickings from '../lib/utils/randomModeUtils/generateRandomStickings';

// Random Menu state and event handlers. Returns randomProps {}. Called on MenuWrapper.tsx

export type SubdivisionOption =
  | 'select-all'
  | 'eighths'
  | 'triplets'
  | 'sixteenths'
  | 'quintuplets'
  | 'sextuplets'
  | 'septuplets';

export function useGenerateStickings() {
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});

  const [selectedRandomOption, setSelectedRandomOption] = useState<
    SubdivisionOption[]
  >([]);

  const [isSelectAll, setSelectAll] = useState(false);

  const handleRandomOptionsChange = (
    id: SubdivisionOption,
    checked: boolean
  ): void => {
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

  const handleGenerateRandomStickings = (
    selectedOption: SubdivisionOption[]
  ): void => {
    if (!selectedOption.length) {
      alert('Select one or more subdivision options');
      return;
    }
    const generated = generateRandomStickings(selectedOption);
    setGeneratedStickings(generated);
  };

  const randomProps = {
    generatedStickings: generatedStickings,
    isSelectAll: isSelectAll,
    selectedRandomOption: selectedRandomOption,
    onGenerateStickings: handleGenerateRandomStickings,
    onRandomOptionsChange: handleRandomOptionsChange,
  };

  return randomProps;
}
