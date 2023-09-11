import { Sequence } from 'tone';
import { useState, useEffect, useRef } from 'react';

// Create a sequence that runs attached to the Tone.Transport
// and updates a state variable with each beat, returns the current beat index
export function useCurrentBeatIndex(beatsPerMeasure: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beatSeqRef = useRef<Sequence | null>(null);

  useEffect(() => {
    // an array of numbers between 0 and beatsPerMeasure
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
