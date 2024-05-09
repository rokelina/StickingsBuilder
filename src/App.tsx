import { useState } from 'react';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import MainContainer from './components/MainContainer/MainContainer';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import MyAccount from './components/MyAccount/MyAccount';

export type MenuId =
  | 'eighth-notes'
  | 'triplet-notes'
  | 'random-stickings'
  | 'user-account'
  | 'saved-stickings'
  | 'about';

function App() {
  const [displayMenu, setDisplayMenu] = useState<MenuId>('eighth-notes');
  const handleNavClick = (id: MenuId): void => {
    setDisplayMenu(id);
  };

  useLoadingSpinner();

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <TopNavBar />
      {displayMenu === 'user-account' ? (
        <MyAccount displayMenu={displayMenu} />
      ) : (
        <MainContainer displayMenu={displayMenu} />
      )}
    </>
  );
}

export default App;
