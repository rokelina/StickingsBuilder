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

const all: string[] = [
  ...eighths,
  ...triplets,
  ...sixteenths,
  ...quintuplets,
  ...sextuplets,
  ...septuplets,
];

const randomIndex = (arr: string[]): number => {
  return Math.floor(Math.random() * arr.length);
};

const combineAll = (): string => {
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

const singleSelectionSticking = (arr: string[]): string => {
  //I'm passing an array of ids that does not include 'select-all' and its length less than 6
  switch (arr[0]) {
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

const generateStickings = (selectedOption: string[]) => {
  let output: { [key: string]: string };

  if (selectedOption[0] === 'select-all' || selectedOption.length === 6) {
    output = {
      'beat-1': combineAll(),
      'beat-2': combineAll(),
      'beat-3': combineAll(),
      'beat-4': combineAll(),
    };
  } else if (
    selectedOption.length === 1 &&
    !selectedOption.includes('select-all')
  ) {
    output = {
      'beat-1': singleSelectionSticking(selectedOption),
      'beat-2': singleSelectionSticking(selectedOption),
      'beat-3': singleSelectionSticking(selectedOption),
      'beat-4': singleSelectionSticking(selectedOption),
    };
  } else {
    return {};
  }
  return output;
};

export default generateStickings;
