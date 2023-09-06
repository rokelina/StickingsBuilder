import { useState } from 'react';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import MainWrapper from './components/MainWrapper/MainWrapper';
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
      <MainWrapper displayMenu={displayMenu} />
    </>
  );
}

export default App;
