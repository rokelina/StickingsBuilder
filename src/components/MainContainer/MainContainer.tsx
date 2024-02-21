import { useSamples } from '../../hooks/useSamples';
import MenuContainer from '../Menu/MenuContainer';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainContainer.css';

interface Props {
  displayMenu: string;
}
function MainContainer({ displayMenu }: Props) {
  // Load click and snare sound files
  const samples = useSamples();

  return (
    <main className="main-wrapper">
      <TopNavBar />
      <MenuContainer displayMenu={displayMenu} samples={samples} />
    </main>
  );
}

export default MainContainer;
