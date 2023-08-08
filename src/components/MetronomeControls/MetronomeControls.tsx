import { useState, useEffect, useRef, ChangeEvent } from 'react';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
// import clickHi from '../../assets/audio/clickHi.wav';
// import clickLow from '../../assets/audio/clickLow.wav';
// import snareR from '../../assets/audio/snareR.wav';
// import snareL from '../../assets/audio/snareL.wav';
import Button from '../Button/Button';
import './MetronomeControls.css';

interface Samples {
  clickSampler: Tone.Sampler | null;
  snareSampler: Tone.Sampler | null;
}
interface Props {
  selectedStickings: { [key: string]: string };
  samples: Samples;
}

function MetronomeControls({ selectedStickings, samples }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');
  const [addCountdown, setAddCountdown] = useState(false);
  // const [samples, setSamples] = useState<{
  //   clickSampler: Tone.Sampler | null;
  //   snareSampler: Tone.Sampler | null;
  // }>({
  //   clickSampler: null,
  //   snareSampler: null,
  // });

  const clickSequenceRef = useRef<Tone.Sequence | null>(null);
  const snareSequenceRef = useRef<Tone.Sequence | null>(null);

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

  // Load the samples only once when the component is mounted
  // useEffect(() => {
  //   const clickSampler = new Tone.Sampler({
  //     C1: clickLow,
  //     D1: clickHi,
  //   }).toDestination();
  //   const snareSampler = new Tone.Sampler({
  //     C3: snareR,
  //     D3: snareL,
  //   }).toDestination();

  //   setSamples({ clickSampler, snareSampler });

  //   return (): void => {
  //     clickSampler.dispose();
  //     snareSampler.dispose();
  //   };
  // }, []);
  useEffect(() => {
    clickSequenceRef.current = new Tone.Sequence(
      (time, note) => {
        samples.clickSampler?.triggerAttack(note, time);
      },
      ['D1', 'C1', 'C1', 'C1'],
      '4n'
    );
    clickSequenceRef.current?.start(0);
    snareSequenceRef.current = new Tone.Sequence(
      (time, note) => {
        samples.snareSampler?.triggerAttack(note, time);
      },
      stickingsSequenceArray,
      '4n'
    );
    addCountdown
      ? snareSequenceRef.current?.start(countdownDelay)
      : snareSequenceRef.current?.start(0);

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
