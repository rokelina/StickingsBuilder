import { useState } from 'react';
import Button from '../Button/Button';
import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff';
import Options from './Options';
import RandomStaff from './RandomStaff';
import generateStickings from '../../lib/utils/randomModeUtils/generateStickings';
import './RandomMenu.css';

function RandomMenu() {
  const [selectedRandomOption, setSelectedRandomOption] = useState('');
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});

  const handleRandomOptionsChange = (id: string): void => {
    setSelectedRandomOption(id);
  };

  const handleGenerateStickings = (selectedOption: string): void => {
    if (!selectedOption.length) {
      alert('Select one option: Combinations, Eighth Notes or Triplet Notes');
      return;
    }
    const generated = generateStickings(selectedOption);
    setGeneratedStickings(generated);
  };

  const isEmpty = (): boolean => {
    return Object.keys(generatedStickings).length === 0;
  };

  return (
    <>
      {isEmpty() ? (
        <EmptyStaff />
      ) : (
        <RandomStaff generatedStickings={generatedStickings} />
      )}
      <div className="random-menu">
        <Options
          selectedOption={selectedRandomOption}
          onOptionsChange={handleRandomOptionsChange}
        />
        <div className="random-controls">
          <Button
            idName="generate-button"
            children="Generate"
            onBtnClick={() => handleGenerateStickings(selectedRandomOption)}
          />
          <Button idName="save-button" children="Save" />
        </div>
      </div>
    </>
  );
}
export default RandomMenu;
