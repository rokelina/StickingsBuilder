import { useState } from 'react';
import './App.css';
import MainWrapper from './components/MainWrapper/MainWrapper';
import SideNavBar from './components/SideNavBar/SideNavBar';

/* App components: 
- MainWrapper
- SideNavBar
*/
function App() {
  const [showMenu, setShowMenu] = useState('eight-notes');

  function handleNavClick(id: string): void {
    setShowMenu(id);
  }

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <MainWrapper />
      {console.log(showMenu)}
    </>
  );
}

export default App;
