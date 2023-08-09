import EmptyStaff from '../Staff/EmptyStaff/EmptyStaff';
import RandomStaff from './RandomStaff';
import Options from './Options';
import Button from '../Button/Button';
import '../Menu/Menu.css';
import './RandomMenu.css';

interface Props {
  selectedRandomOption: string[];
  isSelectAll: boolean;
  generatedStickings: {
    [key: string]: string;
  };
  onRandomOptionsChange: (id: string, checked: boolean) => void;
  onGenerateStickings: (selectedOption: string[]) => void;
}

function RandomMenu({
  selectedRandomOption,
  isSelectAll,
  generatedStickings,
  onRandomOptionsChange,
  onGenerateStickings,
}: Props) {
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
