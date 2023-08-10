import { Sampler } from 'tone';
import { useState, useEffect } from 'react';
import MetronomeControls from './MetronomeControls';
import clickHi from '../../assets/audio/clickHi.wav';
import clickLow from '../../assets/audio/clickLow.wav';
import snareR from '../../assets/audio/snareR.wav';
import snareL from '../../assets/audio/snareL.wav';

interface Samples {
  clickSampler: Sampler | null;
  snareSampler: Sampler | null;
}

interface Props {
  selectedStickings: { [key: string]: string };
  displayMenu: string;
}

function MetronomeWrapper({ selectedStickings, displayMenu }: Props) {
  const [samples, setSamples] = useState<Samples>({
    clickSampler: null,
    snareSampler: null,
  });

  //Load sounds, create Sample objects
  useEffect(() => {
    const clickSampler = new Sampler({
      C1: clickLow,
      D1: clickHi,
    }).toDestination();
    const snareSampler = new Sampler({
      C3: snareR,
      D3: snareL,
    }).toDestination();

    setSamples({ clickSampler, snareSampler });

    return (): void => {
      clickSampler.dispose();
      snareSampler.dispose();
    };
  }, []);

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
