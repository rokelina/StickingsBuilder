import EighthNotesMenu from '../Menu/EighthNotesMenu';
import TripletNotesMenu from '../Menu/TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
}

function MainWrapper({ displayMenu }: Props) {
  // const [bpm, setBpm] = useState('90');
  // const [repeats, setRepeats] = useState('4');

  // const handleBpmChange = (numberInput: string): void => {
  //   setBpm(numberInput);
  // };

  // const handleRepeatChange = (numberInput: string): void => {
  //   setRepeats(numberInput);
  // };

  return (
    <main>
      {displayMenu === 'eighth-notes' && <EighthNotesMenu />}
      {displayMenu === 'triplet-notes' && <TripletNotesMenu />}
      {displayMenu === 'random-stickings' && <RandomMenu />}
    </main>
  );
}

export default MainWrapper;
