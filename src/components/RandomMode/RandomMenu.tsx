import { Sampler } from 'tone';
import { useState } from 'react';
import MetronomeControls from '../MetronomeControls/MetronomeControls';
import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff';
import RandomStaff from './RandomStaff';
import Options from './Options';
import Button from '../Button/Button';
import generateRandomStickings from '../../lib/utils/randomModeUtils/generateRandomStickings';
import '../Menu/Menu.css';
import './RandomMenu.css';

interface Samples {
  clickSampler: Sampler | null;
  snareSampler: Sampler | null;
}
interface Props {
  samples: Samples;
}

function RandomMenu({ samples }: Props) {
  const [selectedRandomOption, setSelectedRandomOption] = useState<string[]>(
    []
  );
  const [isSelectAll, setSelectAll] = useState(false);
  const [generatedStickings, setGeneratedStickings] = useState<{
    [key: string]: string;
  }>({});

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

  const handleGenerateStickings = (selectedOption: string[]): void => {
    if (!selectedOption.length) {
      alert('Select one subdivision option');
      return;
    }
    const generated = generateRandomStickings(selectedOption);
    setGeneratedStickings(generated);
  };

  const isEmpty = (): boolean => {
    return Object.keys(generatedStickings).length === 0;
  };

  return (
    <>
      <MetronomeControls
        selectedStickings={generatedStickings}
        samples={samples}
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
            isSelectAll={isSelectAll}
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
