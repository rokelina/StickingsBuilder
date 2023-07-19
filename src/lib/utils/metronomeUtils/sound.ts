import * as Tone from 'tone';

const click1 = new Tone.Oscillator().toDestination();
const click2 = new Tone.Oscillator(330).toDestination();

const snareSound = new Tone.Sampler({
  C3: 'src/audio/snare.wav',
}).toDestination();
snareSound.volume.value = 12;

export { click1, click2, snareSound };
