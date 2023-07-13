import { useState } from 'react';
import MainWrapper from './components/MainWrapper/MainWrapper';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  const [showMenu, setShowMenu] = useState('eighth-notes');

  const handleNavClick = (id: string): void => {
    setShowMenu(id);
  };

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <MainWrapper displayMenu={showMenu} />
    </>
  );
}

export default App;
