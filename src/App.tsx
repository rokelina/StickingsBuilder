import { useState } from 'react';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import MainContainer from './components/MainContainer/MainContainer';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Login from './components/Login/Login';

function App() {
  const [displayMenu, setDisplayMenu] = useState('eighth-notes');
  const handleNavClick = (id: string): void => {
    setDisplayMenu(id);
  };

  useLoadingSpinner();

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <TopNavBar />
      {displayMenu === 'log-in' ? (
        <Login />
      ) : (
        <MainContainer displayMenu={displayMenu} />
      )}
    </>
  );
}

export default App;
