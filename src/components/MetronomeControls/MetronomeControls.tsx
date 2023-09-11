import { Sequence } from 'tone';
import { useRef } from 'react';
import { Samples } from '../../hooks/useSamples';
import { useSequence } from '../../hooks/useSequence';
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

  useSequence(
    clickSequenceRef,
    snareSequenceRef,
    samples,
    stickingsSequenceArray,
    countdownDelay,
    addCountdown
  );

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
            // disabled={isPlaying}
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
