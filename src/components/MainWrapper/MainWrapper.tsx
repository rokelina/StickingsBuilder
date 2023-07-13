import EighthNotesMenu from '../Menu/EighthNotesMenu';
import TripletNotesMenu from '../Menu/TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
}

function MainWrapper({ displayMenu }: Props) {
  return (
    <main>
      {displayMenu === 'eighth-notes' && <EighthNotesMenu />}
      {displayMenu === 'triplet-notes' && <TripletNotesMenu />}
      {displayMenu === 'random-stickings' && <RandomMenu />}
    </main>
  );
}

export default MainWrapper;
