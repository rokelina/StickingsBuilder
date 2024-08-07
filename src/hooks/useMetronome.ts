import * as Tone from 'tone';
import { useState, useEffect, ChangeEvent } from 'react';
import { useLocation } from 'react-router';

export type MetronomeProps = {
  isPlaying: boolean;
  bpm: string;
  addCountdown: boolean;
  handleStartClick: () => Promise<void>;
  handleBpmChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCountdown: (e: ChangeEvent<HTMLInputElement>) => void;
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/** Metronome state and event handlers, returned as props */
export function useMetronome(currentStickings: { [key: string]: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');
  const [addCountdown, setAddCountdown] = useState(false);
  const location = useLocation();

  const handleStartClick = async () => {
    if (Object.keys(currentStickings).length !== 4) {
      alert('Select all 4 beat stickings to start!');
      return;
    }
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      if (!bpm || +bpm < 20 || +bpm > 300) {
        alert('Enter a value between 20 and 300 BPM');
        return;
      }
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  const handleBpmChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    setBpm(inputValue);
  };
  Tone.Transport.bpm.value = +bpm;

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    Tone.Destination.volume.value = Tone.gainToDb(+inputValue);
  };

  const handleCountdown = (e: ChangeEvent<HTMLInputElement>) => {
    setAddCountdown(e.target.checked);
  };

  const metronomeProps: MetronomeProps = {
    isPlaying,
    bpm,
    addCountdown,
    handleStartClick,
    handleBpmChange,
    handleCountdown,
    handleVolumeChange,
  };
  useEffect(() => {
    //Stop the transport when changing between menus
    Tone.Transport.stop();
    setIsPlaying(false);
  }, [location]);

  return metronomeProps;
}
