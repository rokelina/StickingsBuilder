import { Sequence } from 'tone';
import { useEffect, useRef } from 'react';
import { Samples } from '../../hooks/useCreateSamples';
import mapToSequence from '../../lib/utils/metronomeUtils/mapToSequence';
import Button from '../Button/Button';
import './MetronomeControls.css';

interface Props {
  selectedStickings: { [key: string]: string };
  samples: Samples;
  isPlaying: boolean;
  bpm: string;
  addCountdown: boolean;
  onStartClick: () => Promise<void>;
  onBpmChange: (inputValue: string) => void;
  onVolumeChange: (inputValue: string) => void;
  onCountdown: () => void;
}

function MetronomeControls({
  selectedStickings,
  samples,
  isPlaying,
  bpm,
  addCountdown,
  onStartClick,
  onBpmChange,
  onVolumeChange,
  onCountdown,
}: Props) {
  const clickSequenceRef = useRef<Sequence | null>(null);
  const snareSequenceRef = useRef<Sequence | null>(null);

  const stickingsSequenceArray = mapToSequence(selectedStickings);
  const countdownDelay = (60 / +bpm) * 4;

  useEffect(() => {
    //Metronome sound sequence
    clickSequenceRef.current = new Sequence(
      (time, note) => {
        samples.clickSampler?.triggerAttack(note, time);
      },
      ['D1', 'C1', 'C1', 'C1'],
      '4n'
    );
    clickSequenceRef.current?.start(0);

    //Snare sound sequence
    snareSequenceRef.current = new Sequence(
      (time, note) => {
        samples.snareSampler?.triggerAttack(note, time);
      },
      stickingsSequenceArray,
      '4n'
    );
    addCountdown
      ? snareSequenceRef.current?.start(countdownDelay)
      : snareSequenceRef.current?.start(0);

    // cleanup
    return (): void => {
      clickSequenceRef.current?.dispose();
      snareSequenceRef.current?.dispose();
    };
  }, [stickingsSequenceArray, countdownDelay, addCountdown, samples]);

  return (
    <>
      <div className="playback-controls">
        <div>
          <Button
            idName="play-pause"
            children={isPlaying ? '⏹ STOP' : '▶ PLAY'}
            onBtnClick={onStartClick}
          />
          <label htmlFor="volume">
            <input
              type="range"
              name="volume"
              id="volume"
              className="volume-controls"
              min={0}
              max={1}
              step={0.01}
              onChange={(e) => onVolumeChange(e.target.value)}
              defaultValue={1}
            />
          </label>
        </div>
        <div className="metronome">
          <input
            type="number"
            name="met-input"
            min={20}
            max={300}
            step={5}
            value={bpm}
            className="met-input"
            onChange={(e) => onBpmChange(e.target.value)}
          />
          <span>BPM</span>
        </div>
        <div className="countdown">
          <span>ADD COUNTDOWN</span>
          <input
            type="checkbox"
            checked={addCountdown}
            onChange={onCountdown}
          />
        </div>
      </div>
    </>
  );
}
export default MetronomeControls;
