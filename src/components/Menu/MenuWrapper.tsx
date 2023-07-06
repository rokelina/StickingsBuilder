import EighthNotesMenu from './EighthNotesMenu.tsx';
import RandomMenu from '../RandomMode/RandomMenu.tsx';
import TripletNotesMenu from './TripletNotesMenu.tsx';
import './Menu.css';
import '../Staff/Staff.css';

interface Props {
  displayMenu: string;
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
  selectedStickings: { [key: string]: string };
}

function MenuWrapper({
  displayMenu,
  onFormChange,
  onReset,
  selectedStickings,
}: Props) {
  return (
    <div className="menu">
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu
          onFormChange={onFormChange}
          onReset={onReset}
          selectedStickings={selectedStickings}
        />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu
          onFormChange={onFormChange}
          onReset={onReset}
          selectedStickings={selectedStickings}
        />
      )}
      {displayMenu === 'random-stickings' && <RandomMenu />}
    </div>
  );
}
export default MenuWrapper;
