import { useEffect, MutableRefObject } from 'react';
import { Sequence } from 'tone';
import { Samples } from './useSamples';

/** Creates the sequences that trigger the metronome and snare sounds */
export function useSequence(
  clickRef: MutableRefObject<Sequence | null>,
  snareRef: MutableRefObject<Sequence | null>,
  samples: Samples,
  stickingsSequenceArray: ('C3' | 'D3')[][],
  countdownDelay: number,
  addCountdown: boolean
) {
  useEffect(() => {
    //Metronome sound sequence
    clickRef.current = new Sequence(
      (time, note) => {
        samples.clickSampler?.triggerAttack(note, time);
      },
      ['D1', 'C1', 'C1', 'C1'],
      '4n'
    );
    clickRef.current?.start(0);

    //Snare sound sequence
    snareRef.current = new Sequence(
      (time, note) => {
        samples.snareSampler?.triggerAttack(note, time);
      },
      stickingsSequenceArray,
      '4n'
    );
    addCountdown
      ? snareRef.current?.start(countdownDelay)
      : snareRef.current?.start(0);

    // cleanup
    return (): void => {
      clickRef.current?.dispose();
      snareRef.current?.dispose();
    };
  }, [
    clickRef,
    snareRef,
    stickingsSequenceArray,
    countdownDelay,
    addCountdown,
    samples,
  ]);
}
