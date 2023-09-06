import { useState } from 'react';
import generateRandomStickings from '../lib/utils/randomModeUtils/generateRandomStickings';

export function useGenerateStickings() {
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});
  const [selectedRandomOption, setSelectedRandomOption] = useState<string[]>(
    []
  );
  const [isSelectAll, setSelectAll] = useState(false);

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
      alert('Select one or more subdivision options');
      return;
    }
    const generated = generateRandomStickings(selectedOption);
    setGeneratedStickings(generated);
  };

  console.log(generatedStickings);

  const randomProps = {
    generatedStickings: generatedStickings,
    isSelectAll: isSelectAll,
    selectedRandomOption: selectedRandomOption,
    onGenerateStickings: handleGenerateRandomStickings,
    onRandomOptionsChange: handleRandomOptionsChange,
  };

  return randomProps;
}
