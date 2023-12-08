import { useState } from 'react';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import MainContainer from './components/MainContainer/MainContainer';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  const [displayMenu, setDisplayMenu] = useState('eighth-notes');
  const handleNavClick = (id: string): void => {
    setDisplayMenu(id);
  };

  useLoadingSpinner();

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <MainContainer displayMenu={displayMenu} />
    </>
  );
}

export default App;
