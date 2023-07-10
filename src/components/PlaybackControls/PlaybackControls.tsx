import Button from '../Button/Button';
import './PlaybackControls.css';

function PlaybackControls() {
  return (
    <>
      <div className="playback-controls">
        <Button idName="Play" children="▶ Play" />
        <Button idName="Pause" children="⏸ Pause" />
        <Button idName="Stop" children="⏹ Stop" />
      </div>
      <div className="sound-controls">
        <label htmlFor="metronome-sound">
          Metronome
          <input type="checkbox" name="metronome-sound" id="metronome-sound" />
        </label>
        <label htmlFor="snare-sound">
          Snare
          <input type="checkbox" name="snare-sound" id="snare-sound" />
        </label>
        <label htmlFor="volume">
          Volume
          <input type="range" name="volume" id="volume" />
        </label>
      </div>
    </>
  );
}
export default PlaybackControls;
