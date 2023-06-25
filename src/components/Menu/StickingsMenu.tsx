import BeatForm from './BeatForm';
import RowForm from './RowForm';
import Button from '../Button/Button';
import './Menu.css';

interface MenuProps {
  permutations: { [key: string]: string[] };
}
function StickingsMenu({ permutations }: MenuProps) {
  return (
    <div className="menu-card">
      <div className="menu-container">
        <BeatForm
          beatName="beat-1"
          children="Beat 1"
          permutations={permutations}
        />
        <BeatForm
          beatName="beat-2"
          children="Beat 2"
          permutations={permutations}
        />
        <BeatForm
          beatName="beat-3"
          children="Beat 3"
          permutations={permutations}
        />
        <BeatForm
          beatName="beat-4"
          children="Beat 4"
          permutations={permutations}
        />
      </div>
      <RowForm />
      <div className="menu-options">
        <Button idName="reset-button" children="Reset" />
      </div>
    </div>
  );
}

export default StickingsMenu;
