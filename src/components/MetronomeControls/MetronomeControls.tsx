import Button from '../Button/Button';
import * as Tone from 'tone';
import './MetronomeControls.css';
import { useState, useEffect } from 'react';

interface Props {
  bpmValue: string;
  repeatValue: string;
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ bpmValue, repeatValue }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const bpm = +bpmValue;
  const repeats = +repeatValue;

  useEffect(() => {
    const osc = new Tone.Oscillator().toDestination();
    const transport = Tone.Transport;
    transport.bpm.value = bpm;

    const startMetronome = (): void => {
      Tone.Transport.scheduleRepeat((time) => {
        osc.start(time).stop(time + 0.05);
      }, '4n');
      Tone.Transport.start();
    };

    const stopMetronome = (): void => {
      osc.stop();
      transport.stop();
    };

    isPlaying ? startMetronome() : stopMetronome();

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
          <input type="checkbox" name="metronome-sound" id="metronome-sound" />
        </label>
        <label htmlFor="snare-sound">
          Snare
          <input type="checkbox" name="snare-sound" id="snare-sound" />
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
