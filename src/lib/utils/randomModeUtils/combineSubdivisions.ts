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
      return eighths[randomIndex(eighths)].toUpperCase();
    case 1:
      return triplets[randomIndex(triplets)].toUpperCase();
    case 2:
      return sixteenths[randomIndex(sixteenths)].toUpperCase();
    case 3:
      return quintuplets[randomIndex(quintuplets)].toUpperCase();
    case 4:
      return sextuplets[randomIndex(sextuplets)].toUpperCase();
    case 5:
      return septuplets[randomIndex(septuplets)].toUpperCase();
    default:
      return '';
  }
};

const combineSelectedSubdivisions = (arr: SubdivisionOption[]): string => {
  const subdivision = arr[randomIndex(arr)];
  switch (subdivision) {
    case 'eighths':
      return eighths[randomIndex(eighths)].toUpperCase();
    case 'triplets':
      return triplets[randomIndex(triplets)].toUpperCase();
    case 'sixteenths':
      return sixteenths[randomIndex(sixteenths)].toUpperCase();
    case 'quintuplets':
      return quintuplets[randomIndex(quintuplets)].toUpperCase();
    case 'sextuplets':
      return sextuplets[randomIndex(sextuplets)].toUpperCase();
    case 'septuplets':
      return septuplets[randomIndex(septuplets)].toUpperCase();
    default:
      return '';
  }
};

export { combineAllSubdivisions, combineSelectedSubdivisions };
