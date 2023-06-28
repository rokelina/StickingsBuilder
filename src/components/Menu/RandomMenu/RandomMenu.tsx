import Button from '../../Button/Button';
import './RandomMenu.css';

function RandomMenu() {
  return (
    <div className="random-menu">
      <div className="random-options">
        <label htmlFor="combinations">
          <input type="radio" id="combinations" name="options" />
          Combinations
        </label>
        <label htmlFor="eighths">
          <input type="radio" id="eighths" name="options" />
          Eighth Notes
        </label>
        <label htmlFor="triplets">
          <input type="radio" id="triplets" name="options" />
          Triplets
        </label>
      </div>
      <Button idName="generate-button" children="Generate" />
    </div>
  );
}
export default RandomMenu;
