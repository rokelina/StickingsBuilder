import Button from '../Button/Button';
import EmptyStaff from '../Staff/EmptyStaff';
import Options from './Options';
import Staff from '../Staff/Staff';
import getRandomNotesArray from '../../lib/utils/staffUtils/getRandomNotesArray';
import { RiAiGenerate } from 'react-icons/ri';
import { isStickingsObjEmpty } from '../../lib/uiHelpers/menuHelpers';
import { SubdivisionOption } from '../../hooks/useGenerateStickings';
import '../Menu/MenuContainer.css';
import './RandomMenu.css';

interface Props {
  randomMenuProps: {
    generatedStickings: {
      [key: string]: string;
    };
    selectedRandomOption: SubdivisionOption[];
    onGenerateStickings: (selectedOption: SubdivisionOption[]) => void;
    onRandomOptionsChange: (id: SubdivisionOption, checked: boolean) => void;
  };
  isPlaying: boolean;
}

function RandomMenu({ randomMenuProps, isPlaying }: Props) {
  const {
    selectedRandomOption,
    generatedStickings,
    onRandomOptionsChange,
    onGenerateStickings,
  } = randomMenuProps;

  return (
    <>
      {isStickingsObjEmpty(generatedStickings) ? (
        <EmptyStaff />
      ) : (
        <Staff
          stickings={generatedStickings}
          getNotesArrayFunction={getRandomNotesArray}
          isPlaying={isPlaying}
        />
      )}
      <div className="menu">
        <div className="random-menu">
          <Options
            selectedOption={selectedRandomOption}
            onOptionsChange={onRandomOptionsChange}
          />
          <div className="random-controls">
            <Button
              idName="generate-button"
              children={
                <>
                  GENERATE <RiAiGenerate size="1rem" />
                </>
              }
              onBtnClick={() => onGenerateStickings(selectedRandomOption)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default RandomMenu;
