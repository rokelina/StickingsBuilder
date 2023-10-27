import * as Tone from 'tone';
import { useState, useEffect, ChangeEvent } from 'react';

//Metronome state and event handlers, returned as props. Called on MenuWrapper.tsx
export function useMetronome(
  displayMenu: string,
  currentStickings: { [key: string]: string }
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');
  const [addCountdown, setAddCountdown] = useState(false);

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

  const handleCountdown = () => {
    setAddCountdown(!addCountdown);
  };

  const metronomeProps = {
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
  }, [displayMenu]);

  return metronomeProps;
}
