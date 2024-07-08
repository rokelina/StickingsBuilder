import { useState } from 'react';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import { useSamples } from './hooks/useSamples';
// import MainContainer from './components/MainContainer/MainContainer';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import MyAccount from './components/MyAccount/MyAccount';
import MenuContainer from './components/Menu/MenuContainer';

export type MenuId =
  | 'eighth-notes'
  | 'triplet-notes'
  | 'random-stickings'
  | 'user-account'
  | 'saved-stickings'
  | 'about';

function App() {
  //"navigation" state variable
  const [displayMenu, setDisplayMenu] = useState<MenuId>('eighth-notes');
  const handleNavClick = (id: MenuId): void => {
    setDisplayMenu(id);
  };
  // Load click and snare sound files
  const samples = useSamples();
  useLoadingSpinner();

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <TopNavBar />
      {displayMenu === 'user-account' ? (
        <MyAccount samples={samples} />
      ) : (
        <MenuContainer displayMenu={displayMenu} samples={samples} />
      )}
    </>
  );
}

export default App;
