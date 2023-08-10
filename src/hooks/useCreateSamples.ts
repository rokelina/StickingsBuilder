import { Sampler } from 'tone';
import { useState, useEffect } from 'react';
import clickHi from '../assets/audio/clickHi.wav';
import clickLow from '../assets/audio/clickLow.wav';
import snareR from '../assets/audio/snareR.wav';
import snareL from '../assets/audio/snareL.wav';

interface Samples {
  clickSampler: Sampler | null;
  snareSampler: Sampler | null;
}

export function useCreateSamples() {
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
  return samples;
}
