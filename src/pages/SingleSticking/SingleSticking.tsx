import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import Staff from '../../components/Staff/Staff';
import getRandomNotesArray from '../../lib/utils/staffUtils/getRandomNotesArray';

import { useMetronome } from '../../hooks/useMetronome';
import { useSamples } from '../../hooks/useSamples';

import { IoReturnUpBack } from 'react-icons/io5';
import './SingleStickings.css';
import { useNavigate } from 'react-router';

const SingleSticking = () => {
  const navigate = useNavigate();
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
        <button onClick={() => navigate('/user-account', { replace: true })}>
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
