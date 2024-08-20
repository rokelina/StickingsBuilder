import SubdivisionsInput from './SubdivisionsInput';
import { SubdivisionOption } from '../../hooks/useGenerateStickings';

interface Props {
  onOptionsChange: (id: SubdivisionOption, checked: boolean) => void;
  selectedOption: SubdivisionOption[];
}

function Subdivisions({ onOptionsChange, selectedOption }: Props) {
  const isSelectAll = selectedOption.includes('select-all');

  return (
    <div className="random-options">
      <div className="select-all">
        <SubdivisionsInput
          onOptionsChange={onOptionsChange}
          id="select-all"
          children="Select All"
          checked={isSelectAll}
        />
      </div>
      <div className="subdivision-options">
        <SubdivisionsInput
          onOptionsChange={onOptionsChange}
          id="eighths"
          children="8th Notes"
          checked={selectedOption.includes('eighths')}
          disabled={isSelectAll}
        />
        <SubdivisionsInput
          onOptionsChange={onOptionsChange}
          id="triplets"
          children="8th Note Triplets"
          checked={selectedOption.includes('triplets')}
          disabled={isSelectAll}
        />
        <SubdivisionsInput
          onOptionsChange={onOptionsChange}
          id="sixteenths"
          children="16th Notes"
          checked={selectedOption.includes('sixteenths')}
          disabled={isSelectAll}
        />
        <SubdivisionsInput
          onOptionsChange={onOptionsChange}
          id="quintuplets"
          children="Quintuplets"
          checked={selectedOption.includes('quintuplets')}
          disabled={isSelectAll}
        />
        <SubdivisionsInput
          onOptionsChange={onOptionsChange}
          id="sextuplets"
          children="Sextuplets"
          checked={selectedOption.includes('sextuplets')}
          disabled={isSelectAll}
        />
        <SubdivisionsInput
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
export default Subdivisions;
