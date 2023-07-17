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
  const bpm = +bpmValue;

  useEffect(() => {
    const click1 = new Tone.Oscillator().toDestination();
    const click2 = new Tone.Oscillator(330).toDestination();

    let beat_count = 0;

    const transport = Tone.Transport;
    transport.bpm.value = bpm;

    const startMetronome = (): void => {
      transport.scheduleRepeat((time) => {
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
      transport.start();
    };

    const stopMetronome = (): void => {
      click1.dispose();
      click2.dispose();
    };

    if (isPlaying) {
      startMetronome();
    } else {
      stopMetronome();
    }
    console.log(isPlaying);
    return stopMetronome;
  }, [isPlaying, bpm]);

  return (
    <>
      <div className="playback-controls">
        <Button
          idName="play-pause"
          children={isPlaying ? '⏸ Pause' : '▶ Play'}
          onBtnClick={() =>
            isPlaying ? setIsPlaying(false) : setIsPlaying(true)
          }
        />
        <Button
          idName="stop"
          children="⏹ Stop"
          onBtnClick={() => setIsPlaying(false)}
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
