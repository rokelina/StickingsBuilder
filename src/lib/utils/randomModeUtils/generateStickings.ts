import { eightNotesPermutations, tripletPermutations } from '../permutations';

const generateStickings = (selectedOption: string) => {
  const eighths = Object.values(eightNotesPermutations);
  const triplets = Object.values(tripletPermutations);

  const randomIndex = (arr: string[]): number => {
    return Math.floor(Math.random() * arr.length);
  };

  const generateCombinations = (): string => {
    if (Math.random() < 0.5) {
      return eighths[randomIndex(eighths)].toUpperCase();
    } else {
      return triplets[randomIndex(triplets)].toUpperCase();
    }
  };

  const generateOutput = (arr: string[]): { [key: string]: string } => {
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
        'beat-1': generateCombinations(),
        'beat-2': generateCombinations(),
        'beat-3': generateCombinations(),
        'beat-4': generateCombinations(),
      };
      break;

    case 'eighths':
      output = generateOutput(eighths);
      break;

    case 'triplets':
      output = generateOutput(triplets);
      break;

    default:
      output = {};
      break;
  }
  return output;
};

export default generateStickings;
