import { useSamples } from '../../hooks/useSamples';
import MetronomeControls from './MetronomeControls';

interface Props {
  selectedStickings: { [key: string]: string };
  displayMenu: string;
}

function MetronomeWrapper({ selectedStickings, displayMenu }: Props) {
  // Load sounds
  const samples = useSamples();

  return (
    <>
      <MetronomeControls
        selectedStickings={selectedStickings}
        samples={samples}
        displayMenu={displayMenu}
      />
    </>
  );
}

export default MetronomeWrapper;
