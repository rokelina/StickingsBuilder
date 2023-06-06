import Button from '../Button/Button';
import './PlaybackControls.css';

function PlaybackControls() {
  return (
    <div className="controls">
      <Button idName="Play" children="▶️ Play" />
      <Button idName="Pause" children="⏸ Pause" />
      <Button idName="Stop" children="⏹ Stop" />
    </div>
  );
}
export default PlaybackControls;
