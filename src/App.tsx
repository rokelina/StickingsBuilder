import { useEffect, useState } from 'react';
import MainWrapper from './components/MainWrapper/MainWrapper';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  const [showMenu, setShowMenu] = useState('eighth-notes');

  const handleNavClick = (id: string): void => {
    setShowMenu(id);
  };

  const load = () => new Promise((resolve) => setTimeout(resolve, 1000));
  useEffect(() => {
    const ele = document.getElementById('loader');
    // const body = document.querySelector('body');
    load().then(() => {
      if (ele) {
        ele.classList.add('hidden');

        setTimeout(() => {
          // remove from DOM
          ele.parentNode?.removeChild(ele);
        }, 50);
      }
    });
  }, []);

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <MainWrapper displayMenu={showMenu} />
    </>
  );
}

export default App;
