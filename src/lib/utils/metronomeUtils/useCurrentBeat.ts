import { Sequence } from 'tone';
import { useState, useEffect, useRef } from 'react';

export function useCurrentBeat(beatsPerMeasure: number) {
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
  console.log(currentIndex);
  return currentIndex;
}

// export function useCurrentBeat(beatsPerMeasure: number) {
//   function* beatGenerator() {
//     let index = 0;
//     while (true) {
//       yield index;
//       index = (index + 1) % beatsPerMeasure;
//     }
//   }

//   let eventID: number | null = null;
//   const generator = beatGenerator();
//   const bpmValue = Transport.bpm.value;

//   if (Transport.state === 'started') {
//     eventID = Transport.scheduleRepeat(() => {
//       const nextBeat = generator.next().value;
//       console.log(nextBeat);
//     }, 60 / bpmValue);
//   } else {
//     if (eventID) {
//       Transport.clear(eventID);
//     }
//     console.log('stoppped');
//   }
// }

// import { useEffect, useState } from 'react';
// import { Transport } from 'tone';

// export function useCurrentBeat(beatsPerMeasure: number) {
//   const [currentBeat, setCurrentBeat] = useState<number | null>(null);

//   function* beatGenerator() {
//     let index = 0;
//     while (true) {
//       yield index;
//       index = (index + 1) % beatsPerMeasure;
//     }
//   }

//   useEffect(() => {
//     let eventID: number | null = null;
//     const generator = beatGenerator();

//     if (Transport.state === 'started') {
//       eventID = Transport.scheduleRepeat(() => {
//         const nextBeat = generator.next().value;
//         setCurrentBeat(nextBeat);
//         console.log(nextBeat);
//       }, '4n');
//     } else {
//       if (eventID) {
//         Transport.clear(eventID);
//       }
//       console.log('stopped');
//     }

//     // Cleanup function to clear the eventID when the component unmounts
//     return () => {
//       if (eventID) {
//         Transport.clear(eventID);
//       }
//     };
//   }, [beatsPerMeasure]);

//   return currentBeat;
// }
