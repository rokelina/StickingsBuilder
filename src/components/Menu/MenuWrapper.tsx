import * as Tone from 'tone';
import { useSelectStickings } from '../../hooks/useSelectStickings';
import { useGenerateStickings } from '../../hooks/useGenerateStickings';
import { Samples } from '../../hooks/useSamples';
import { useState, useEffect } from 'react';
import EighthNotesMenu from './EighthNotesMenu';
import TripletNotesMenu from './TripletNotesMenu';
import RandomMenu from '../RandomMode/RandomMenu';
import MetronomeControls from '../MetronomeControls/MetronomeControls';

interface Props {
  displayMenu: string;
  samples: Samples;
}

function MenuWrapper({ displayMenu, samples }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState('80');
  const [addCountdown, setAddCountdown] = useState(false);

  const eighthsProps = useSelectStickings();
  const tripletsProps = useSelectStickings();
  const randomProps = useGenerateStickings();

  //Initialize currentStickings to an empty object
  let currentStickings: {
    [key: string]: string;
  } = {};
  // Pass stickings to the metronome
  if (displayMenu === 'random-stickings') {
    currentStickings = randomProps.generatedStickings;
  }
  if (displayMenu === 'eighth-notes') {
    currentStickings = eighthsProps.selectedStickings;
  }
  if (displayMenu === 'triplet-notes') {
    currentStickings = tripletsProps.selectedStickings;
  }

  const handleStartClick = async () => {
    if (Object.keys(currentStickings).length !== 4) {
      alert('Select all 4 beat stickings to start!');
      return;
    }
    if (Tone.Transport.state === 'started') {
      setIsPlaying(false);
      Tone.Transport.stop();
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
  useEffect(() => {
    //Stop the transport when changing between menus
    setIsPlaying(false);
    Tone.Transport.stop();
  }, [displayMenu]);

  return (
    <>
      <MetronomeControls
        selectedStickings={currentStickings}
        samples={samples}
        isPlaying={isPlaying}
        bpm={bpm}
        addCountdown={addCountdown}
        onStartClick={handleStartClick}
        onBpmChange={handleBpmChange}
        onVolumeChange={handleVolumeChange}
        onCountdown={handleCountdown}
      />
      {displayMenu === 'eighth-notes' && (
        <EighthNotesMenu stickingMenuProps={eighthsProps} />
      )}
      {displayMenu === 'triplet-notes' && (
        <TripletNotesMenu stickingMenuProps={tripletsProps} />
      )}
      {displayMenu === 'random-stickings' && (
        <RandomMenu randomMenuProps={randomProps} />
      )}
    </>
  );
}
export default MenuWrapper;
