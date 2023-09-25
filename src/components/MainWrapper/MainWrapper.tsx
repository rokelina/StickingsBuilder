import { useSamples } from '../../hooks/useSamples';
import MenuWrapper from '../Menu/MenuWrapper';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
}
function MainWrapper({ displayMenu }: Props) {
  // Load click and snare sounds
  const samples = useSamples();

  return (
    <main className="main-wrapper">
      <TopNavBar />
      <MenuWrapper displayMenu={displayMenu} samples={samples} />
    </main>
  );
}

export default MainWrapper;
