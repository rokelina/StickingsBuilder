import { useLoadingSpinner } from './hooks/useLoadingSpinner';
import { useSamples } from './hooks/useSamples';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import { Outlet } from 'react-router';

export type MenuId =
  | 'eighth-notes'
  | 'triplet-notes'
  | 'random-stickings'
  | 'user-account'
  | 'saved-stickings'
  | 'about';

function App() {
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
    </>
  );
}

export default App;
