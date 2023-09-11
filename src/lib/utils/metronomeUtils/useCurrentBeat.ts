import { Sequence } from 'tone';
import { useState, useEffect, useRef } from 'react';

export function useCurrentBeatIndex(beatsPerMeasure: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beatSeqRef = useRef<Sequence | null>(null);

  useEffect(() => {
    const beatsArray: number[] = [...Array(beatsPerMeasure).keys()];
    beatSeqRef.current = new Sequence(
      (_, step) => {
        setCurrentIndex(step);
      },
      [...beatsArray],
      '4n'
    );
    beatSeqRef.current?.start(0);

    return () => {
      beatSeqRef.current?.dispose();
    };
  }, [beatsPerMeasure]);

  return currentIndex;
}
