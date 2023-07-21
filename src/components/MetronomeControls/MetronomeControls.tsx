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
      if (clickRef.current?.loaded && snareRef.current?.loaded) {
        await Tone.start();
        Tone.Transport.start();
        setIsPlaying(true);
      }
    }
  };

  const handleBpmChange = (numberInput: string): void => {
    setBpm(numberInput);
  };

  Tone.Transport.bpm.value = +bpm;

  useEffect(() => {
    clickRef.current = new Tone.Sampler({
      C1: 'src/audio/clickHi.wav',
      D1: 'src/audio/clickLow.wav',
    }).toDestination();

    snareRef.current = new Tone.Sampler({
      C3: 'src/audio/snareR.wav',
      D3: 'src/audio/snareL.wav',
    }).toDestination();

    clickSequenceRef.current = new Tone.Sequence(
      (time, note) => {
        clickRef.current?.triggerAttackRelease(note, 0.1, time);
      },
      ['C1', 'D1', 'D1', 'D1'],
      '4n'
    );

    snareSequenceRef.current = new Tone.Sequence((time, note) => {
      snareRef.current?.triggerAttackRelease(note, 0.1, time);
    }, stickingsSequenceArray);

    clickSequenceRef.current?.start(0);
    snareSequenceRef.current?.start(0);

    const stopMetronome = (): void => {
      clickRef.current?.disconnect();
      snareRef.current?.disconnect();
      snareSequenceRef.current?.dispose();
      clickSequenceRef.current?.dispose();
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
