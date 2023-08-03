interface Props {
  onOptionsChange: (id: string, checked: boolean) => void;
  selectedOption: string[];
  isSelectAll: boolean;
}

function Options({ onOptionsChange, isSelectAll, selectedOption }: Props) {
  return (
    <div className="random-options">
      <div className="select-all">
        <label htmlFor="select-all">
          <input
            type="checkbox"
            id="select-all"
            name="options"
            checked={isSelectAll}
            onChange={(e) => onOptionsChange('select-all', e.target.checked)}
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
            checked={selectedOption.includes('eighths')}
            onChange={(e) => onOptionsChange('eighths', e.target.checked)}
            disabled={isSelectAll}
          />
          8th Notes
        </label>
        <label htmlFor="triplets">
          <input
            type="checkbox"
            id="triplets"
            name="options"
            checked={selectedOption.includes('triplets')}
            onChange={(e) => onOptionsChange('triplets', e.target.checked)}
            disabled={isSelectAll}
          />
          8th Note Triplets
        </label>
        <label htmlFor="sixteenths">
          <input
            type="checkbox"
            id="sixteenths"
            name="options"
            checked={selectedOption.includes('sixteenths')}
            onChange={(e) => onOptionsChange('sixteenths', e.target.checked)}
            disabled={isSelectAll}
          />
          16th Notes
        </label>
        <label htmlFor="quintuplets">
          <input
            type="checkbox"
            id="quintuplets"
            name="options"
            checked={selectedOption.includes('quintuplets')}
            onChange={(e) => onOptionsChange('quintuplets', e.target.checked)}
            disabled={isSelectAll}
          />
          Quintuplets
        </label>
        <label htmlFor="sextuplets">
          <input
            type="checkbox"
            id="sextuplets"
            name="options"
            checked={selectedOption.includes('sextuplets')}
            onChange={(e) => onOptionsChange('sextuplets', e.target.checked)}
            disabled={isSelectAll}
          />
          Sextuplets
        </label>
        <label htmlFor="septuplets">
          <input
            type="checkbox"
            id="septuplets"
            name="options"
            checked={selectedOption.includes('septuplets')}
            onChange={(e) => onOptionsChange('septuplets', e.target.checked)}
            disabled={isSelectAll}
          />
          Septuplets
        </label>
      </div>
    </div>
  );
}
export default Options;
