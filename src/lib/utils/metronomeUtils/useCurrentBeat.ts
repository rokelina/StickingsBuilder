import { Transport } from 'tone';

//

export function useCurrentBeat(beatsPerMeasure: number) {
  function* beatGenerator() {
    let index = 0;
    while (true) {
      yield index;
      index = (index + 1) % beatsPerMeasure;
    }
  }

  // function beats(beat: number) {}
  let eventID: number | null = null;
  const generator = beatGenerator();

  if (Transport.state === 'started') {
    eventID = Transport.scheduleRepeat(() => {
      const nextBeat = generator.next().value;
      console.log(nextBeat);
    }, '4n');
  } else {
    if (eventID) {
      Transport.clear(eventID);
    }
    console.log('stoppped');
  }
}
