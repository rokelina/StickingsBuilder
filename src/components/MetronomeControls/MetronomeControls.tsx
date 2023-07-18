import Button from '../Button/Button';
import * as Tone from 'tone';
import { mapToSequence } from '../../lib/utils/metronomeUtils/mapToSequence';
import { useState, useEffect, useRef } from 'react';
import './MetronomeControls.css';

interface Props {
  bpmValue: string;
  repeatValue: string;
  selectedStickings: { [key: string]: string };
}

function MetronomeControls({ bpmValue, selectedStickings }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetronomeEnabled, setMetronomeEnabled] = useState(true);
  const [isSnareEnabled, setSnareEnabled] = useState(true);

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

  Tone.Transport.bpm.value = +bpmValue;

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

    if (!isMetronomeEnabled) {
      clickRef.current.volume.value = -50;
    }

    if (!isSnareEnabled) {
      snareRef.current.volume.value = -50;
    }

    return stopMetronome;
  }, [isMetronomeEnabled, isSnareEnabled, stickingsSequenceArray]);

  return (
    <>
      <div className="playback-controls">
        <Button
          idName="play-pause"
          children={isPlaying ? '⏹ Stop' : '▶ Play'}
          onBtnClick={() => handleStartClick()}
        />
      </div>
      <div className="sound-controls">
        <label htmlFor="metronome-sound">
          Metronome
          <input
            type="checkbox"
            name="metronome-sound"
            id="metronome-sound"
            checked={isMetronomeEnabled}
            onChange={() => setMetronomeEnabled(!isMetronomeEnabled)}
          />
        </label>
        <label htmlFor="snare-sound">
          Snare
          <input
            type="checkbox"
            name="snare-sound"
            id="snare-sound"
            checked={isSnareEnabled}
            onChange={() => setSnareEnabled(!isSnareEnabled)}
          />
        </label>
        <label htmlFor="volume">
          Volume
          <input type="range" name="volume" id="volume" />
        </label>
      </div>
    </>
  );
}
export default MetronomeControls;
