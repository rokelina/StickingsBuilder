import Button from '../Button/Button';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import MetronomeIcon from '../../assets/icons/MetronomeIcon';
import SnareIcon from '../../assets/icons/SnareIcon';
import './MetronomeControls.css';
//Click Hi
import C1 from '../../audio/C1.wav';
//Click Low
import D1 from '../../audio/D1.wav';
//Snare R
import C3 from '../../audio/C3.wav';
//Snare L
import D3 from '../../audio/D3.wav';

interface Props {
  displayMenu: string;
  selectedStickings: { [key: string]: string };
  //reset: boolean
}

function MetronomeControls({ selectedStickings }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');

  const clickRef = useRef<Tone.Sampler | null>(null);
  const snareRef = useRef<Tone.Sampler | null>(null);
  const clickSequenceRef = useRef<Tone.Sequence | null>(null);
  const snareSequenceRef = useRef<Tone.Sequence | null>(null);

  const stickingsSequenceArray = mapToSequence(selectedStickings);

  const handleStartClick = async () => {
    if (
      Tone.Transport.state === 'started' ||
      // reset===true
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

  const handleBpmChange = (numberInput: string): void => {
    setBpm(numberInput);
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
          snareSequenceRef.current = new Tone.Sequence((time, note) => {
            snareRef.current?.triggerAttack(note, time);
          }, stickingsSequenceArray);
          if (Object.keys(selectedStickings).length === 4) {
            snareSequenceRef.current?.start(0);
          }
        },
      }
    ).toDestination();

    return (): void => {
      clickRef.current?.disconnect();
      snareRef.current?.disconnect();
      clickSequenceRef.current?.dispose();
      snareSequenceRef.current?.dispose();
    };
  }, [stickingsSequenceArray, selectedStickings]);

  return (
    <>
      <div className="sound-controls">
        <div className="toggle-sound">
          {<MetronomeIcon />}
          <input
            className="toggle-sound-checkbox"
            type="checkbox"
            name="metronome-sound"
            id="metronome-sound"
          />
          {<SnareIcon />}
          <input
            className="toggle-sound-checkbox"
            type="checkbox"
            name="snare-sound"
            id="snare-sound"
          />
        </div>
      </div>
      <div className="playback-controls">
        <div>
          <Button
            idName="play-pause"
            // isPlaying && !reset ? 'Pause' : 'Play'
            children={isPlaying ? '⏸ Pause' : '▶ Play'}
            // disabled={
            //   Object.keys(selectedStickings).length === 4 ? false : true
            // }
            onBtnClick={() => handleStartClick()}
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
            min={20}
            value={bpm}
            className="met-input"
            onChange={(e) => handleBpmChange(e.target.value)}
          />
          <span>BPM</span>
        </div>
      </div>
    </>
  );
}
export default MetronomeControls;
