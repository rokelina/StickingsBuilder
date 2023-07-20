import Button from '../Button/Button';
import NumberInput from '../MetronomeOptions/NumberInput/NumberInput';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
import { useState, useEffect, useRef } from 'react';
import './MetronomeControls.css';
import MetronomeIcon from '../../assets/icons/MetronomeIcon';
import SnareIcon from '../../assets/icons/SnareIcon';

interface Props {
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ selectedStickings }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [metronomeVolume, setMetronomeVolume] = useState(10);
  const [snareVolume, setSnareVolume] = useState(10);
  const [bpm, setBpm] = useState('80');

  const clickRef = useRef<Tone.Sampler | null>(null);
  const snareRef = useRef<Tone.Sampler | null>(null);
  const clickSequenceRef = useRef<Tone.Sequence | null>(null);
  const snareSequenceRef = useRef<Tone.Sequence | null>(null);
  const clickVolumeRef = useRef<number>(10);
  const snareVolumeRef = useRef<number>(10);

  clickVolumeRef.current = metronomeVolume;
  snareVolumeRef.current = snareVolume;

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

    clickRef.current.volume.value = clickVolumeRef.current;

    snareRef.current = new Tone.Sampler({
      C3: 'src/audio/snareR.wav',
      D3: 'src/audio/snareL.wav',
    }).toDestination();

    snareRef.current.volume.value = snareVolumeRef.current;

    // const events = {
    //   time:0,
    //   callback: () => {

    //   }
    // }

    // clickSequenceRef.current =

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
  }, [stickingsSequenceArray]);

  return (
    <>
      <div className="playback-controls">
        <Button
          idName="play-pause"
          children={isPlaying ? '⏹ Stop' : '▶ Play'}
          disabled={Object.keys(selectedStickings).length === 4 ? false : true}
          onBtnClick={() => handleStartClick()}
        />
        <NumberInput
          wrapperName="metronome"
          inputName="met-input"
          minValue="20"
          children="BPM"
          onValueChange={handleBpmChange}
          value={bpm}
        ></NumberInput>
      </div>
      <div className="sound-controls">
        <label htmlFor="metronome-volume">
          {<MetronomeIcon />}
          <input
            type="range"
            name="metronome-volume"
            id="metronome-volume"
            min={-20}
            max={25}
            step={5}
            value={metronomeVolume}
            onChange={(e) => setMetronomeVolume(+e.target.value)}
          />
        </label>
      </div>
      <div className="sound-controls">
        <label htmlFor="snare-sound">
          {<SnareIcon />}
          <input
            type="range"
            name="snare-sound"
            id="snare-sound"
            min={-10}
            max={25}
            step={5}
            value={snareVolume}
            onChange={(e) => {
              setSnareVolume(+e.target.value);
            }}
          />
        </label>
      </div>
    </>
  );
}
export default MetronomeControls;
