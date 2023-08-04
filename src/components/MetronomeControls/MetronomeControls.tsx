import Button from '../Button/Button';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
import { useState, useEffect, useRef, ChangeEvent } from 'react';
//Click Hi
import C1 from '../../audio/C1.wav';
//Click Low
import D1 from '../../audio/D1.wav';
//Snare R
import C3 from '../../audio/C3.wav';
//Snare L
import D3 from '../../audio/D3.wav';
import './MetronomeControls.css';

interface Props {
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ selectedStickings }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');

  const clickRef = useRef<Tone.Sampler | null>(null);
  const snareRef = useRef<Tone.Sampler | null>(null);
  const clickSequenceRef = useRef<Tone.Sequence | null>(null);
  const snareSequenceRef = useRef<Tone.Sequence | null>(null);
  const countdownRef = useRef<HTMLInputElement | null>(null);

  const stickingsSequenceArray = mapToSequence(selectedStickings);
  const countdownDelay = (60 / +bpm) * 4;

  const handleStartClick = async () => {
    if (
      Tone.Transport.state === 'started' ||
      Object.keys(selectedStickings).length !== 4
    ) {
      setIsPlaying(false);
      Tone.Transport.stop();
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  const handleBpmChange = (inputValue: string): void => {
    if (!inputValue) {
      alert('Enter a valid BPM value');
      setBpm('80');
      return;
    }
    setBpm(inputValue);
  };
  Tone.Transport.bpm.value = +bpm;

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    Tone.Destination.volume.value = Tone.gainToDb(Number(e.target.value));
  };

  useEffect(() => {
    clickRef.current = new Tone.Sampler(
      { C1, D1 },
      {
        onload: () => {
          clickSequenceRef.current = new Tone.Sequence(
            (time, note) => {
              clickRef.current?.triggerAttack(note, time);
            },
            ['C1', 'D1', 'D1', 'D1'],
            '4n'
          );
          if (Object.keys(selectedStickings).length === 4) {
            clickSequenceRef.current?.start(0);
          }
        },
      }
    ).toDestination();

    snareRef.current = new Tone.Sampler(
      {
        C3,
        D3,
      },
      {
        onload: () => {
          snareSequenceRef.current = new Tone.Sequence(
            (time, note) => {
              snareRef.current?.triggerAttack(note, time);
            },
            stickingsSequenceArray,
            '4n'
          );
          if (Object.keys(selectedStickings).length === 4) {
            countdownRef.current?.checked
              ? snareSequenceRef.current?.start(countdownDelay)
              : snareSequenceRef.current?.start(0);
          }
        },
      }
    ).toDestination();

    return (): void => {
      clickRef.current?.dispose();
      snareRef.current?.dispose();
      clickSequenceRef.current?.dispose();
      snareSequenceRef.current?.dispose();
    };
  }, [stickingsSequenceArray, selectedStickings, countdownDelay]);

  return (
    <>
      <div className="playback-controls">
        <div>
          <Button
            idName="play-pause"
            children={isPlaying ? '⏸ Pause' : '▶ Play'}
            onBtnClick={handleStartClick}
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
              onChange={handleVolumeChange}
              defaultValue={1}
            />
          </label>
        </div>
        <div className="metronome">
          <input
            type="number"
            name="met-input"
            min={40}
            max={300}
            step={5}
            value={bpm}
            className="met-input"
            onChange={(e) => handleBpmChange(e.target.value)}
          />
          <span>BPM</span>
        </div>
        <div className="countdown">
          <span>Add Countdown</span>
          <input type="checkbox" ref={countdownRef} />
        </div>
      </div>
    </>
  );
}
export default MetronomeControls;
