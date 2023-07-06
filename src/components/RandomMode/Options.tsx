interface Props {
  onOptionsChange: (id: string) => void;
  selectedOption: string;
}

function Options({ onOptionsChange, selectedOption }: Props) {
  const isChecked = (id: string): boolean => {
    return selectedOption === id;
  };

  return (
    <div className="random-options">
      <form action="">
        <label htmlFor="combinations">
          <input
            type="radio"
            id="combinations"
            name="options"
            checked={isChecked('combinations')}
            onChange={() => onOptionsChange('combinations')}
          />
          Combinations
        </label>
        <label htmlFor="eighths">
          <input
            type="radio"
            id="eighths"
            name="options"
            checked={isChecked('eighths')}
            onChange={() => onOptionsChange('eighths')}
          />
          Eighth Notes
        </label>
        <label htmlFor="triplets">
          <input
            type="radio"
            id="triplets"
            name="options"
            checked={isChecked('triplets')}
            onChange={() => onOptionsChange('triplets')}
          />
          Triplets
        </label>
      </form>
    </div>
  );
}
export default Options;
