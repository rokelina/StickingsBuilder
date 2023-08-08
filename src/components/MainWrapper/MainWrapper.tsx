import { Sampler } from 'tone';
import { useState, useEffect } from 'react';
import EighthNotesMenu from '../Menu/EighthNotesMenu';
import TripletNotesMenu from '../Menu/TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import TopNavBar from '../TopNavBar/TopNavBar';
import clickHi from '../../assets/audio/clickHi.wav';
import clickLow from '../../assets/audio/clickLow.wav';
import snareR from '../../assets/audio/snareR.wav';
import snareL from '../../assets/audio/snareL.wav';
import './MainWrapper.css';

interface Samples {
  clickSampler: Sampler | null;
  snareSampler: Sampler | null;
}
interface Props {
  displayMenu: string;
}
function MainWrapper({ displayMenu }: Props) {
  const [samples, setSamples] = useState<Samples>({
    clickSampler: null,
    snareSampler: null,
  });

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
    <main>
      <TopNavBar />
      {displayMenu === 'eighth-notes' && <EighthNotesMenu samples={samples} />}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu samples={samples} />
      )}
      {displayMenu === 'random-stickings' && <RandomMenu samples={samples} />}
    </main>
  );
}

export default MainWrapper;
