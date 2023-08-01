interface Props {
  onOptionsChange: (id: string) => void;
  selectedOption: string;
}

/*
two divs
-All checkbox
-subdivision
  - 8th
  - 8th note triplets
  - 16th
  - etc
*/

function Options({ onOptionsChange, selectedOption }: Props) {
  const isChecked = (id: string): boolean => {
    return selectedOption === id;
  };

  return (
    <div className="random-options">
      <div className="select-all">
        <label htmlFor="combinations">
          <input
            type="checkbox"
            id="combinations"
            name="options"
            checked={isChecked('combinations')}
            onChange={() => onOptionsChange('combinations')}
          />
          Select All
        </label>
      </div>
      <div className="subdivision-options">
        <label htmlFor="eighths">
          <input
            type="checkbox"
            id="eighths"
            name="options"
            checked={isChecked('eighths')}
            onChange={() => onOptionsChange('eighths')}
          />
          8th Notes
        </label>
        <label htmlFor="triplets">
          <input
            type="checkbox"
            id="triplets"
            name="options"
            checked={isChecked('triplets')}
            onChange={() => onOptionsChange('triplets')}
          />
          8th Note Triplets
        </label>
        <label htmlFor="triplets">
          <input
            type="checkbox"
            id="triplets"
            name="options"
            checked={isChecked('triplets')}
            onChange={() => onOptionsChange('triplets')}
          />
          16th Notes
        </label>
        <label htmlFor="triplets">
          <input
            type="checkbox"
            id="triplets"
            name="options"
            checked={isChecked('triplets')}
            onChange={() => onOptionsChange('triplets')}
          />
          Quintuplets
        </label>
        <label htmlFor="triplets">
          <input
            type="checkbox"
            id="triplets"
            name="options"
            checked={isChecked('triplets')}
            onChange={() => onOptionsChange('triplets')}
          />
          Sextuplets
        </label>
        <label htmlFor="triplets">
          <input
            type="checkbox"
            id="triplets"
            name="options"
            checked={isChecked('triplets')}
            onChange={() => onOptionsChange('triplets')}
          />
          Septuplets
        </label>
      </div>
    </div>
  );
}
export default Options;
