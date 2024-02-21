import { useState } from 'react';
import generateRandomStickings from '../lib/utils/randomModeUtils/generateRandomStickings';

export type SubdivisionOption =
  | 'select-all'
  | 'eighths'
  | 'triplets'
  | 'sixteenths'
  | 'quintuplets'
  | 'sextuplets'
  | 'septuplets';

/**
 * Random Menu state and event handlers. Returns randomProps {}
 */
export function useGenerateStickings() {
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});

  const [selectedRandomOption, setSelectedRandomOption] = useState<
    SubdivisionOption[]
  >([]);

  const handleRandomOptionsChange = (
    id: SubdivisionOption,
    checked: boolean
  ): void => {
    if (id === 'select-all') {
      if (checked) {
        setSelectedRandomOption(['select-all']);
      } else {
        setSelectedRandomOption([]);
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

  if (selectedRandomOption.length === 6) {
    setSelectedRandomOption(['select-all']);
  }

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
    selectedRandomOption: selectedRandomOption,
    onGenerateStickings: handleGenerateRandomStickings,
    onRandomOptionsChange: handleRandomOptionsChange,
  };

  return randomProps;
}
