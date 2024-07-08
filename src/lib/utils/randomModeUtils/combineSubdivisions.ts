import {
  eightNotesPermutations,
  tripletPermutations,
  sixteenthPermutations,
  quintupletPermutations,
  sextupletPermutations,
  septupletPermutations,
} from '../permutations';
import { SubdivisionOption } from '../../../hooks/useGenerateStickings';

const eighths = Object.values(eightNotesPermutations);
const triplets = Object.values(tripletPermutations);
const sixteenths = Object.values(sixteenthPermutations);
const quintuplets = Object.values(quintupletPermutations);
const sextuplets = Object.values(sextupletPermutations);
const septuplets = Object.values(septupletPermutations);

const randomIndex = (arr: string[]): number => {
  return Math.floor(Math.random() * arr.length);
};

const combineAllSubdivisions = (): string => {
  const randomNumber = Math.floor(Math.random() * 6);

  switch (randomNumber) {
    case 0:
      return eighths[randomIndex(eighths)];
    case 1:
      return triplets[randomIndex(triplets)];
    case 2:
      return sixteenths[randomIndex(sixteenths)];
    case 3:
      return quintuplets[randomIndex(quintuplets)];
    case 4:
      return sextuplets[randomIndex(sextuplets)];
    case 5:
      return septuplets[randomIndex(septuplets)];
    default:
      return '';
  }
};

const combineSelectedSubdivisions = (arr: SubdivisionOption[]): string => {
  const subdivision = arr[randomIndex(arr)];

  switch (subdivision) {
    case 'eighths':
      return eighths[randomIndex(eighths)];
    case 'triplets':
      return triplets[randomIndex(triplets)];
    case 'sixteenths':
      return sixteenths[randomIndex(sixteenths)];
    case 'quintuplets':
      return quintuplets[randomIndex(quintuplets)];
    case 'sextuplets':
      return sextuplets[randomIndex(sextuplets)];
    case 'septuplets':
      return septuplets[randomIndex(septuplets)];
    default:
      return '';
  }
};

export { combineAllSubdivisions, combineSelectedSubdivisions };
