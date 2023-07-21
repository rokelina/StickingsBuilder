import Button from '../Button/Button';
import NumberInput from '../MetronomeOptions/NumberInput/NumberInput';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
import { useState, useEffect, useRef } from 'react';
import MetronomeIcon from '../../assets/icons/MetronomeIcon';
import SnareIcon from '../../assets/icons/SnareIcon';
import './MetronomeControls.css';

interface Props {
  displayMenu: string;
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ selectedStickings, displayMenu }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');

  const clickRef = useRef<Tone.Sampler | null>(null);
  const snareRef = useRef<Tone.Sampler | null>(null);
  const clickSequenceRef = useRef<Tone.Sequence | null>(null);
  const snareSequenceRef = useRef<Tone.Sequence | null>(null);

  const stickingsSequenceArray = mapToSequence(selectedStickings);

  const handleStartClick = async () => {
    if (Tone.Transport.state === 'started') {
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

  useEffect(() => {
    clickRef.current = new Tone.Sampler({
      urls: { C1: 'src/audio/clickHi.wav', D1: 'src/audio/clickLow.wav' },
      onload: () => {
        clickSequenceRef.current = new Tone.Sequence(
          (time, note) => {
            clickRef.current?.triggerAttack(note, time);
          },
          ['C1', 'D1', 'D1', 'D1'],
          '4n'
        );
        clickSequenceRef.current?.start(0);
      },
    }).toDestination();

    snareRef.current = new Tone.Sampler({
      urls: {
        C3: 'src/audio/snareR.wav',
        D3: 'src/audio/snareL.wav',
      },
      onload: () => {
        snareSequenceRef.current = new Tone.Sequence((time, note) => {
          snareRef.current?.triggerAttack(note, time);
        }, stickingsSequenceArray);
        snareSequenceRef.current?.start(0);
      },
    }).toDestination();

    const stopMetronome = (): void => {
      clickRef.current?.disconnect();
      snareRef.current?.disconnect();
      clickSequenceRef.current?.dispose();
      snareSequenceRef.current?.dispose();
    };

    return stopMetronome;
  }, [stickingsSequenceArray, displayMenu]);

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
            children={isPlaying ? '⏹ Stop' : '▶ Play'}
            disabled={
              Object.keys(selectedStickings).length === 4 ? false : true
            }
            onBtnClick={() => handleStartClick()}
          />
          <label htmlFor="volume">
            <input
              type="range"
              name="volume"
              id="volume"
              className="volume-controls"
            />
          </label>
        </div>
        <div>
          <NumberInput
            wrapperName="metronome"
            inputName="met-input"
            minValue="20"
            children="BPM"
            onValueChange={handleBpmChange}
            value={bpm}
          ></NumberInput>
        </div>
      </div>
    </>
  );
}
export default MetronomeControls;
