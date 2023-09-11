import Staff from '../Staff/Staff';
import EmptyStaff from '../Staff/EmptyStaff';
import Options from './Options';
import Button from '../Button/Button';
import drawRandomNotes from '../../lib/utils/staffUtils/drawRandomNotes';
import {
  isStickingsObjEmpty,
  isSaveBtnDisabled,
} from '../../lib/uiHelpers/menuHelpers';
import '../Menu/Menu.css';
import './RandomMenu.css';

interface Props {
  randomMenuProps: {
    generatedStickings: {
      [key: string]: string;
    };
    isSelectAll: boolean;
    selectedRandomOption: string[];
    onGenerateStickings: (selectedOption: string[]) => void;
    onRandomOptionsChange: (id: string, checked: boolean) => void;
  };
  isPlaying: boolean;
}

function RandomMenu({ randomMenuProps, isPlaying }: Props) {
  const {
    selectedRandomOption,
    isSelectAll,
    generatedStickings,
    onRandomOptionsChange,
    onGenerateStickings,
  } = randomMenuProps;

  return (
    <>
      <div className="menu">
        {isStickingsObjEmpty(generatedStickings) ? (
          <EmptyStaff />
        ) : (
          <Staff
            stickings={generatedStickings}
            drawNotesFunction={drawRandomNotes}
            isPlaying={isPlaying}
          />
        )}
        <div className="random-menu">
          <Options
            selectedOption={selectedRandomOption}
            onOptionsChange={onRandomOptionsChange}
            isSelectAll={isSelectAll}
          />
          <div className="random-controls">
            <Button
              idName="generate-button"
              children="GENERATE"
              onBtnClick={() => onGenerateStickings(selectedRandomOption)}
            />
            <Button
              idName="save-button"
              children="SAVE"
              disabled={isSaveBtnDisabled(generatedStickings)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default RandomMenu;
