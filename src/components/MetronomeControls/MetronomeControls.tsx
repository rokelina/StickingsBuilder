import Button from '../Button/Button';
import * as Tone from 'tone';
import './MetronomeControls.css';
import { useState, useEffect } from 'react';

interface Props {
  bpmValue: string;
  repeatValue: string;
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ bpmValue }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetronomeEnabled, setMetronomeEnabled] = useState(true);
  const [isSnareEnabled, setSnareEnabled] = useState(true);

  const handleStartClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      Tone.Transport.stop();
    } else {
      setIsPlaying(true);
    }
  };

  const click1 = new Tone.Oscillator().toDestination();
  const click2 = new Tone.Oscillator(330).toDestination();

  const snareSound = new Tone.Sampler({
    C3: 'src/audio/snare.wav',
  }).toDestination();
  snareSound.volume.value = 12;

  useEffect(() => {
    const bpm = +bpmValue;
    Tone.Transport.bpm.value = bpm;

    const startMetronome = (): void => {
      let beat_count = 0;
      Tone.Transport.scheduleRepeat((time) => {
        if (beat_count === 0) {
          click1.start(time).stop(time + 0.05);
          beat_count++;
        } else if (beat_count === 3) {
          click2.start(time).stop(time + 0.05);
          beat_count = 0;
        } else {
          click2.start(time).stop(time + 0.05);
          beat_count++;
        }
      }, '4n');
      Tone.Transport.start();
    };

    const startSnare = (): void => {
      Tone.Transport.scheduleRepeat((time) => {
        snareSound.triggerAttackRelease('C3', '8n', time);
      }, '8n');
    };

    const stopMetronome = (): void => {
      click1.dispose();
      click2.dispose();
      snareSound.disconnect();
    };

    if (isPlaying) {
      startMetronome();
      startSnare();
    }

    return stopMetronome;
  }, [isPlaying, bpmValue, click1, click2, snareSound]);

  return (
    <>
      <div className="playback-controls">
        <Button
          idName="play-pause"
          children={isPlaying ? '⏹ Stop' : '▶ Play'}
          onBtnClick={() => handleStartClick()}
        />
      </div>
      <div className="sound-controls">
        <label htmlFor="metronome-sound">
          Metronome
          <input
            type="checkbox"
            name="metronome-sound"
            id="metronome-sound"
            checked={isMetronomeEnabled}
            onChange={() => setMetronomeEnabled(!isMetronomeEnabled)}
          />
        </label>
        <label htmlFor="snare-sound">
          Snare
          <input
            type="checkbox"
            name="snare-sound"
            id="snare-sound"
            checked={isSnareEnabled}
            onChange={() => setSnareEnabled(!isSnareEnabled)}
          />
        </label>
        <label htmlFor="volume">
          Volume
          <input type="range" name="volume" id="volume" />
        </label>
      </div>
    </>
  );
}
export default MetronomeControls;
