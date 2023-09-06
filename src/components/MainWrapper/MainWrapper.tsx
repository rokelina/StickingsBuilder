import { useCreateSamples } from '../../hooks/useCreateSamples';
import MenuWrapper from '../Menu/MenuWrapper';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
}
function MainWrapper({ displayMenu }: Props) {
  // Load click and snare sounds
  const samples = useCreateSamples();

  return (
    <main>
      <TopNavBar />
      <MenuWrapper displayMenu={displayMenu} samples={samples} />
    </main>
  );
}

export default MainWrapper;
