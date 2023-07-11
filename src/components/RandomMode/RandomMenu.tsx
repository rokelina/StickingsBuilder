import { useState } from 'react';
import Button from '../Button/Button';
import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff';
import Options from './Options';
import RandomStaff from './RandomStaff';
import generateStickings from '../../lib/utils/randomModeUtils/generateStickings';
import './RandomMenu.css';

function RandomMenu() {
  const [selectedOption, setSelectedOption] = useState('');
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});
  const [isEmpty, setIsEmpty] = useState(true);

  const handleOptionsChange = (id: string): void => {
    setSelectedOption(id);
  };

  const handleGenerateStickings = (selectedOption: string): void => {
    const generated = generateStickings(selectedOption);
    setGeneratedStickings(generated);
    setIsEmpty(false);
  };

  console.log(generatedStickings);
  console.log(isEmpty);

  return (
    <>
      {isEmpty ? (
        <EmptyStaff />
      ) : (
        <RandomStaff generatedStickings={generatedStickings} />
      )}
      <div className="random-menu">
        <Options
          selectedOption={selectedOption}
          onOptionsChange={handleOptionsChange}
        />
        <div className="random-controls">
          <Button
            idName="generate-button"
            children="Generate"
            onBtnClick={() => handleGenerateStickings(selectedOption)}
          />
          <Button idName="save-button" children="Save" />
        </div>
      </div>
    </>
  );
}
export default RandomMenu;
