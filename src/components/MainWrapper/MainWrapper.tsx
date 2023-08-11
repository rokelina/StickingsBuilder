import MenuWrapper from '../Menu/MenuWrapper';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainWrapper.css';

interface Props {
  displayMenu: string;
}
function MainWrapper({ displayMenu }: Props) {
  return (
    <main>
      <TopNavBar />
      <MenuWrapper displayMenu={displayMenu} />
    </main>
  );
}

export default MainWrapper;
