import Staff from '../Staff/Staff';
import EmptyStaff from '../Staff/EmptyStaff';
import Options from './Options';
import Button from '../Button/Button';
import drawRandomNotes from '../../lib/utils/staffUtils/drawRandomNotes';
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
}

function RandomMenu({ randomMenuProps }: Props) {
  const {
    selectedRandomOption,
    isSelectAll,
    generatedStickings,
    onRandomOptionsChange,
    onGenerateStickings,
  } = randomMenuProps;

  const isEmpty = (): boolean => {
    return Object.keys(generatedStickings).length === 0;
  };

  const isDisabled = () => {
    return Object.keys(generatedStickings).length !== 4;
  };

  return (
    <>
      <div className="menu">
        {isEmpty() ? (
          <EmptyStaff />
        ) : (
          <Staff
            stickings={generatedStickings}
            drawNotesFunction={drawRandomNotes}
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
              disabled={isDisabled()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default RandomMenu;
