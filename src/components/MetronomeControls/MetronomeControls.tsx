import { Sequence } from 'tone';
import { ChangeEvent, useRef } from 'react';
import { Samples } from '../../hooks/useSamples';
import { useSequence } from '../../hooks/useSequence';
import { FaPlay } from 'react-icons/fa6';
import { FaStop } from 'react-icons/fa6';
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
  onBpmChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
            children={
              isPlaying ? (
                <>
                  <FaStop /> STOP
                </>
              ) : (
                <>
                  <FaPlay /> PLAY
                </>
              )
            }
            onBtnClick={onStartClick}
          />
          <label htmlFor="volume">
            <input
              aria-label="volume control"
              type="range"
              name="volume"
              id="volume"
              className="volume-controls"
              min={0}
              max={1}
              step={0.01}
              onChange={onVolumeChange}
              defaultValue={1}
            />
          </label>
        </div>
        <div className="metronome">
          <input
            aria-label="beats per minute value"
            type="number"
            name="met-input"
            min={20}
            max={300}
            step={5}
            value={bpm}
            className="met-input"
            onChange={onBpmChange}
          />
          <span aria-label="beats per minute">BPM</span>
        </div>
        <div className="countdown">
          <span>ADD COUNTDOWN</span>
          <input
            aria-label="add a countdown measure"
            name="countdown"
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
