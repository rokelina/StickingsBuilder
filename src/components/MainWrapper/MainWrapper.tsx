import EighthNotesMenu from '../Menu/EighthNotesMenu';
import TripletNotesMenu from '../Menu/TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
}

function MainWrapper({ displayMenu }: Props) {
  return (
    <main>
      <TopNavBar />
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu displayMenu={displayMenu} />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu displayMenu={displayMenu} />
      )}
      {displayMenu === 'random-stickings' && (
        <RandomMenu displayMenu={displayMenu} />
      )}
    </main>
  );
}

export default MainWrapper;
