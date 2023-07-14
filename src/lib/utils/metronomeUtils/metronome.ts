import * as Tone from 'tone';

const osc = new Tone.Oscillator().toDestination();

export const startMetronome = (bpm: number): void => {
  Tone.Transport.bpm.value = bpm;
  // start/stop the oscillator every quarter note
  Tone.Transport.scheduleRepeat((time) => {
    osc.start(time).stop(time + 0.05);
  }, '4n');
  Tone.Transport.start();
};

export const stopMetronome = (): void => {
  if (osc) {
    osc.stop();
  }
};
