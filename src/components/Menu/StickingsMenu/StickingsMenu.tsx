import BeatForm from './MenuForms/BeatForm';
import RowForm from './MenuForms/RowForm';
import Button from '../../Button/Button';

interface MenuProps {
  permutations: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
  selectedStickings: { [key: string]: string };
}
function StickingsMenu({
  permutations,
  onFormChange,
  onReset,
  selectedStickings,
}: MenuProps) {
  return (
    <div className="menu-card">
      <div className="menu-container">
        <BeatForm
          beatName="beat-1"
          children="Beat 1"
          permutations={permutations}
          onFormChange={onFormChange}
          selectedStickings={selectedStickings}
        />
        <BeatForm
          beatName="beat-2"
          children="Beat 2"
          permutations={permutations}
          onFormChange={onFormChange}
          selectedStickings={selectedStickings}
        />
        <BeatForm
          beatName="beat-3"
          children="Beat 3"
          permutations={permutations}
          onFormChange={onFormChange}
          selectedStickings={selectedStickings}
        />
        <BeatForm
          beatName="beat-4"
          children="Beat 4"
          permutations={permutations}
          onFormChange={onFormChange}
          selectedStickings={selectedStickings}
        />
        <RowForm permutations={permutations} />
      </div>
      <div className="menu-options">
        <Button
          idName="reset-button"
          children="Reset"
          onBtnClick={() => onReset()}
        />
      </div>
    </div>
  );
}

export default StickingsMenu;
