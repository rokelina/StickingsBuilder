import OptionsInput from './OptionsInput';
import { SubdivisionOption } from '../../hooks/useGenerateStickings';

interface Props {
  onOptionsChange: (id: SubdivisionOption, checked: boolean) => void;
  selectedOption: SubdivisionOption[];
  isSelectAll: boolean;
}

function Options({ onOptionsChange, isSelectAll, selectedOption }: Props) {
  return (
    <div className="random-options">
      <div className="select-all">
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="select-all"
          children="Select All"
          checked={isSelectAll}
        />
      </div>
      <div className="subdivision-options">
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="eighths"
          children="8th Notes"
          checked={selectedOption.includes('eighths')}
          disabled={isSelectAll}
        />
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="triplets"
          children="8th Note Triplets"
          checked={selectedOption.includes('triplets')}
          disabled={isSelectAll}
        />
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="sixteenths"
          children="16th Notes"
          checked={selectedOption.includes('sixteenths')}
          disabled={isSelectAll}
        />
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="quintuplets"
          children="Quintuplets"
          checked={selectedOption.includes('quintuplets')}
          disabled={isSelectAll}
        />
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="sextuplets"
          children="Sextuplets"
          checked={selectedOption.includes('sextuplets')}
          disabled={isSelectAll}
        />
        <OptionsInput
          onOptionsChange={onOptionsChange}
          id="septuplets"
          children="Septuplets"
          checked={selectedOption.includes('septuplets')}
          disabled={isSelectAll}
        />
      </div>
    </div>
  );
}
export default Options;
