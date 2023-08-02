import { useState } from 'react';
import Button from '../Button/Button';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff';
import RandomStaff from './RandomStaff';
import Options from './Options';
import generateStickings from '../../lib/utils/randomModeUtils/generateStickings';
import '../Menu/Menu.css';
import './RandomMenu.css';

interface Props {
  displayMenu: string;
}

function RandomMenu({ displayMenu }: Props) {
  const [selectedRandomOption, setSelectedRandomOption] = useState('');
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});

  const handleRandomOptionsChange = (id: string): void => {
    setSelectedRandomOption(id);
  };

  const handleGenerateStickings = (selectedOption: string): void => {
    if (!selectedOption.length) {
      alert('Select one subdivision option');
      return;
    }
    const generated = generateStickings(selectedOption);
    setGeneratedStickings(generated);
  };

  const isEmpty = (): boolean => {
    return Object.keys(generatedStickings).length === 0;
  };

  console.log(generatedStickings);

  return (
    <>
      <MetronomeControls
        selectedStickings={generatedStickings}
        displayMenu={displayMenu}
      />
      <div className="menu">
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
      </div>
    </>
  );
}
export default RandomMenu;
