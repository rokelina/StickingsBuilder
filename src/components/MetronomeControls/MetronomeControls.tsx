import { useState, useEffect, useRef, useMemo, ChangeEvent } from 'react';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
import clickHi from '../../assets/audio/clickHi.wav';
import clickLow from '../../assets/audio/clickLow.wav';
import snareR from '../../assets/audio/snareR.wav';
import snareL from '../../assets/audio/snareL.wav';
import Button from '../Button/Button';
import './MetronomeControls.css';

interface Props {
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ selectedStickings }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');
  const [addCountdown, setAddCountdown] = useState(false);

  const clickRef = useRef<Tone.Sampler | null>(null);
  const snareRef = useRef<Tone.Sampler | null>(null);
  const clickSequenceRef = useRef<Tone.Sequence | null>(null);
  const snareSequenceRef = useRef<Tone.Sequence | null>(null);

  const stickingsSequenceArray = useMemo(() => {
    return mapToSequence(selectedStickings);
  }, [selectedStickings]);

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
      { C1: clickLow, D1: clickHi },
      {
        onload: () => {
          clickSequenceRef.current = new Tone.Sequence(
            (time, note) => {
              clickRef.current?.triggerAttack(note, time);
            },
            ['D1', 'C1', 'C1', 'C1'],
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
        C3: snareR,
        D3: snareL,
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
            addCountdown
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
  }, [stickingsSequenceArray, selectedStickings, countdownDelay, addCountdown]);

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
          <input
            type="checkbox"
            checked={addCountdown}
            onChange={() => setAddCountdown(!addCountdown)}
          />
        </div>
      </div>
    </>
  );
}
export default MetronomeControls;
