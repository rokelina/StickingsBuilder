import Button from '../../components/Button/Button';
import EmptyStaff from '../../components/Staff/EmptyStaff';
import Options from '../../components/RandomMode/Options';
import Staff from '../../components/Staff/Staff';
import getRandomNotesArray from '../../lib/utils/staffUtils/getRandomNotesArray';
import { isStickingsObjEmpty } from '../../lib/uiHelpers/menuHelpers';
import { MenuOutletContextProps } from '../MenuLayout/MenuLayout';
import { useOutletContext } from 'react-router';

import { RiAiGenerate } from 'react-icons/ri';

function RandomNotesMenu() {
  const { randomProps, metronomeProps } =
    useOutletContext<MenuOutletContextProps>();
  const {
    generatedStickings,
    onGenerateStickings,
    onRandomOptionsChange,
    selectedRandomOption,
  } = randomProps;

  const { isPlaying } = metronomeProps;

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
                  <RiAiGenerate size="1.5rem" />
                  <span
                    style={{ paddingInlineStart: '0.5rem' }}
                    aria-label="generate stickings button"
                  >
                    GENERATE
                  </span>
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
export default RandomNotesMenu;
