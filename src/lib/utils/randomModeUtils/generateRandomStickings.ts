import {
  combineAllSubdivisions,
  combineSelectedSubdivisions,
} from './combineSubdivisions';
import { SubdivisionOption } from '../../../hooks/useGenerateStickings';

const generateRandomStickings = (selectedOption: SubdivisionOption[]) => {
  let output: { [key: string]: string };

  if (selectedOption[0] === 'select-all' || selectedOption.length === 6) {
    output = {
      'beat-1': combineAllSubdivisions(),
      'beat-2': combineAllSubdivisions(),
      'beat-3': combineAllSubdivisions(),
      'beat-4': combineAllSubdivisions(),
    };
  } else {
    output = {
      'beat-1': combineSelectedSubdivisions(selectedOption),
      'beat-2': combineSelectedSubdivisions(selectedOption),
      'beat-3': combineSelectedSubdivisions(selectedOption),
      'beat-4': combineSelectedSubdivisions(selectedOption),
    };
  }
  return output;
};

export default generateRandomStickings;
