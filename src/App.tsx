import TopNavBar from './components/TopNavBar/TopNavBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import { Samples, useSamples } from './hooks/useSamples';
import { StickingsProps, useSelectStickings } from './hooks/useSelectStickings';
import {
  RandomProps,
  useGenerateStickings,
} from './hooks/useGenerateStickings';
import { Outlet } from 'react-router';
import { useLoadingSpinner } from './hooks/useLoadingSpinner';

export type OutletContextProps = {
  eighthsProps: StickingsProps;
  tripletProps: StickingsProps;
  randomProps: RandomProps;
  samples: Samples;
};
function App() {
  const samples = useSamples();
  const eighthsProps = useSelectStickings();
  const tripletProps = useSelectStickings();
  const randomProps = useGenerateStickings();

  useLoadingSpinner();

  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main>
        <Outlet
          context={{ samples, eighthsProps, tripletProps, randomProps }}
        />
      </main>
    </>
  );
}

export default App;
