import { useState, useEffect, CSSProperties } from 'react';
// import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import MainWrapper from './components/MainWrapper/MainWrapper';
import SideNavBar from './components/SideNavBar/SideNavBar';
// import BarLoader from 'react-spinners/BarLoader';

function App() {
  const [showMenu, setShowMenu] = useState('eighth-notes');

  const handleNavClick = (id: string): void => {
    setShowMenu(id);
  };

  return (
    <>
      {/* {isLoading ? (
        <BarLoader />
      ) : ( */}
      <>
        <SideNavBar onNavClick={handleNavClick} />
        <MainWrapper displayMenu={showMenu} />
      </>
      {/* )} */}
    </>
  );
}

export default App;
