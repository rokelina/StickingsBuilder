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

const generateStickings = (selectedOption: string) => {
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

  const singleOptionOutput = (arr: string[]): { [key: string]: string } => {
    return {
      'beat-1': arr[randomIndex(arr)].toUpperCase(),
      'beat-2': arr[randomIndex(arr)].toUpperCase(),
      'beat-3': arr[randomIndex(arr)].toUpperCase(),
      'beat-4': arr[randomIndex(arr)].toUpperCase(),
    };
  };

  let output: { [key: string]: string };

  switch (selectedOption) {
    case 'combinations':
      output = {
        'beat-1': combineAll(),
        'beat-2': combineAll(),
        'beat-3': combineAll(),
        'beat-4': combineAll(),
      };
      break;

    case 'eighths':
      output = singleOptionOutput(eighths);
      break;

    case 'triplets':
      output = singleOptionOutput(triplets);
      break;

    default:
      output = {};
      break;
  }
  return output;
};

export default generateStickings;
