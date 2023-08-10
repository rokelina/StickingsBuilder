import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff';
import RandomStaff from './RandomStaff';
import Options from './Options';
import Button from '../Button/Button';
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

  return (
    <>
      <div className="menu">
        {isEmpty() ? (
          <EmptyStaff />
        ) : (
          <RandomStaff generatedStickings={generatedStickings} />
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
              children="Generate"
              onBtnClick={() => onGenerateStickings(selectedRandomOption)}
            />
            <Button idName="save-button" children="Save" />
          </div>
        </div>
      </div>
    </>
  );
}
export default RandomMenu;
