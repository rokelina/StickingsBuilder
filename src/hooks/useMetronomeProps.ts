import * as Tone from 'tone';
import { useState, useEffect } from 'react';

export function useMetronomeProps(
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
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  const handleBpmChange = (inputValue: string): void => {
    if (!inputValue || +inputValue < 20 || +inputValue > 300) {
      alert('Enter a value between 20 and 300 BPM');
      return;
    }
    setBpm(inputValue);
  };
  Tone.Transport.bpm.value = +bpm;

  const handleVolumeChange = (inputValue: string) => {
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
