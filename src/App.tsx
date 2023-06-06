import { useState } from 'react';
import './App.css';
import MainWrapper from './components/MainWrapper/MainWrapper';
import SideNavBar from './components/SideNavBar/SideNavBar';

/* App components: 
- MainWrapper 
- SideNavBar ✔️
*/
function App() {
  const [showMenu, setShowMenu] = useState('eighth-notes');

  const handleNavClick = (id: string): void => {
    setShowMenu(id);
    console.log('Hello');
  };

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <MainWrapper displayMenu={showMenu} />
    </>
  );
}

export default App;
