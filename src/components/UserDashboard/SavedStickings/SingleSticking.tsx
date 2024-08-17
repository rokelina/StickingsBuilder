import MetronomeControls from '../../MetronomeControls/MetronomeControls';
import { useMetronome } from '../../../hooks/useMetronome';
import { useSamples } from '../../../hooks/useSamples';
import Staff from '../../Staff/Staff';
import { IoReturnUpBack } from 'react-icons/io5';
import getRandomNotesArray from '../../../lib/utils/staffUtils/getRandomNotesArray';
import './SingleSticking.css';

const SingleSticking = () => {
  const samples = useSamples();
  const metronomeProps = useMetronome({
    'beat-1': 'rl',
    'beat-2': 'rl',
    'beat-3': 'rl',
    'beat-4': 'rl',
  });
  return (
    <div className="container">
      <div className="back-btn">
        <button onClick={() => console.log('back-btn-clicked')}>
          <IoReturnUpBack size={'2rem'} />
          <p style={{ marginLeft: '1rem' }}>back</p>
        </button>
      </div>
      <MetronomeControls
        selectedStickings={{
          'beat-1': 'rl',
          'beat-2': 'rl',
          'beat-3': 'rl',
          'beat-4': 'rl',
        }}
        isPlaying={metronomeProps.isPlaying}
        samples={samples}
        bpm={metronomeProps.bpm}
        addCountdown={metronomeProps.addCountdown}
        onBpmChange={metronomeProps.handleBpmChange}
        onCountdown={metronomeProps.handleCountdown}
        onStartClick={metronomeProps.handleStartClick}
        onVolumeChange={metronomeProps.handleVolumeChange}
      />
      <Staff
        stickings={{
          'beat-1': 'rl',
          'beat-2': 'rl',
          'beat-3': 'rl',
          'beat-4': 'rl',
        }}
        isPlaying={metronomeProps.isPlaying}
        getNotesArrayFunction={getRandomNotesArray}
      />
    </div>
  );
};
export default SingleSticking;
