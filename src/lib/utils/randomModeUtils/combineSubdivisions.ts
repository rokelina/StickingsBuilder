import {
  eightNotesPermutations,
  tripletPermutations,
  sixteenthPermutations,
  quintupletPermutations,
  sextupletPermutations,
  septupletPermutations,
} from '../permutations';

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

const combineSelectedSubdivisions = (arr: string[]): string => {
  let filteredArray: string[] = [];
  for (const id of arr) {
    switch (id) {
      case 'eighths':
        filteredArray = [...filteredArray, ...eighths];
        break;
      case 'triplets':
        filteredArray = [...filteredArray, ...triplets];
        break;
      case 'sixteenths':
        filteredArray = [...filteredArray, ...sixteenths];
        break;
      case 'quintuplets':
        filteredArray = [...filteredArray, ...quintuplets];
        break;
      case 'sextuplets':
        filteredArray = [...filteredArray, ...sextuplets];
        break;
      case 'septuplets':
        filteredArray = [...filteredArray, ...septuplets];
        break;
    }
  }
  return filteredArray[randomIndex(filteredArray)].toUpperCase();
};

export { combineAllSubdivisions, combineSelectedSubdivisions };
