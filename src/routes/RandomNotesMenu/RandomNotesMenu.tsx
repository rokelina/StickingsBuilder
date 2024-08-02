import Button from '../../components/Button/Button';
import EmptyStaff from '../../components/Staff/EmptyStaff';
import Options from '../../components/RandomMode/Options';
import Staff from '../../components/Staff/Staff';
import getRandomNotesArray from '../../lib/utils/staffUtils/getRandomNotesArray';
import { RiAiGenerate } from 'react-icons/ri';
import { isStickingsObjEmpty } from '../../lib/uiHelpers/menuHelpers';
import { useGenerateStickings } from '../../hooks/useGenerateStickings';
import '../../components/Menu/MenuContainer.css';
import '../../components/RandomMode/RandomMenu.css';
import { useMetronome } from '../../hooks/useMetronome';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import { useOutletContext } from 'react-router';
import { Samples } from '../../hooks/useSamples';
import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';

function RandomNotesMenu() {
  const samples = useOutletContext<Samples>();
  const {
    selectedRandomOption,
    generatedStickings,
    onRandomOptionsChange,
    onGenerateStickings,
  } = useGenerateStickings();
  const metronomeProps = useMetronome(generatedStickings);

  return (
    <>
      <div className="main-container">
        {/* Layout */}
        <div className="controls">
          <MetronomeControls
            selectedStickings={generatedStickings}
            samples={samples}
            isPlaying={metronomeProps.isPlaying}
            bpm={metronomeProps.bpm}
            addCountdown={metronomeProps.addCountdown}
            onStartClick={metronomeProps.handleStartClick}
            onBpmChange={metronomeProps.handleBpmChange}
            onVolumeChange={metronomeProps.handleVolumeChange}
            onCountdown={metronomeProps.handleCountdown}
          />
          <SaveBtn currentSticking={generatedStickings} />
        </div>
      </div>
      {isStickingsObjEmpty(generatedStickings) ? (
        <EmptyStaff />
      ) : (
        <Staff
          stickings={generatedStickings}
          getNotesArrayFunction={getRandomNotesArray}
          isPlaying={metronomeProps.isPlaying}
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
