import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import { useSamples } from './hooks/useSamples';
import { Outlet } from 'react-router';

import './components/Menu/MenuContainer.css';
import './components/RandomMode/RandomMenu.css';
function App() {
  // Load 'click' and 'snare' sound files
  const samples = useSamples();
  useLoadingSpinner();

  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main>
        <Outlet context={samples} />
      </main>
    </>
  );
}

export default App;
