import { useState } from 'react';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import { useSamples } from './hooks/useSamples';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import MyAccount from './components/MyAccount/MyAccount';
import MenuContainer from './components/Menu/MenuContainer';
import { Outlet } from 'react-router';

export type MenuId =
  | 'eighth-notes'
  | 'triplet-notes'
  | 'random-stickings'
  | 'user-account'
  | 'saved-stickings'
  | 'about';

function App() {
  //"navigation" state variable
  // const [displayMenu, setDisplayMenu] = useState<string>('eighth-notes');
  // const handleNavClick = (id: string): void => {
  //   setDisplayMenu(id);
  // };
  // Load click and snare sound files
  const samples = useSamples();
  useLoadingSpinner();

  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main>
        <Outlet context={samples} />
      </main>
      {/* {displayMenu === 'user-account' ? (
        <MyAccount />
      ) : (
        <MenuContainer displayMenu={displayMenu} samples={samples} />
      )} */}
    </>
  );
}

export default App;
